import {
  BetFilters,
  BetStatus,
  CreationType,
  Game,
  GameBet,
  GameStatus,
  Winner,
} from '@bet/structures';
import { TeamRepository } from '../Repository/TeamRepository';
import { GameRepository } from '../Repository/GameRepository';
import { ExternalGame } from '../interfaces/ExternalGame';
import { ExternalGamesService } from './ExternalGamesService';
import { GameBetRepository } from '../Repository/GameBetRepository';

export class GameService {
  private gameRepository = new GameRepository();
  private teamRepository = new TeamRepository();
  private externalGamesService = new ExternalGamesService();
  private gameBetRepository = new GameBetRepository();

  async addScheduledMatchesToDatabase(): Promise<void> {
    const scheduledGames: ExternalGame[] =
      await this.externalGamesService.getScheduledGames();
    const gamesToAdd: Game[] = await this.mapToGames(scheduledGames);
    await this.createGames(gamesToAdd);
  }

  private mapToGames(matches: ExternalGame[]): Promise<Game[]> {
    return Promise.all(
      matches.map(async ({ homeTeam, awayTeam, score, status, ...values }) => {
        const homeTeamDoc = await this.teamRepository.getOne({
          externalId: homeTeam.externalId,
        });

        const awayTeamDoc = await this.teamRepository.getOne({
          externalId: awayTeam.externalId,
        });
        return {
          ...values,
          status: status === GameStatus.Timed ? GameStatus.Scheduled : status,
          creationType: CreationType.External,
          homeTeam: homeTeamDoc,
          awayTeam: awayTeamDoc,
          winner: score.winner,
          homeScore: score.fullTime.home,
          awayScore: score.fullTime.away,
        };
      }),
    );
  }

  private async createGames(matches: Game[]): Promise<Game[]> {
    const addedMatches = [];

    for (const betToAdd of matches) {
      const game = await this.gameRepository.getOne({
        externalId: betToAdd.externalId,
      });
      if (!game) {
        const doc = await this.gameRepository.createOne({ ...betToAdd });
        addedMatches.push(doc);
      }
    }

    return addedMatches;
  }

  async getUpdatedGamesByStages(stages: string[]): Promise<Game[]> {
    // const finishedGames = await this.externalGamesService
    //   .getGamesByStages(stages.join(','))
    //   .then((data) =>
    //     data.filter((game) => game.status === GameStatus.Finished),
    //   );
    const finishedGames = await this.externalGamesService
      .getGamesByStages(stages.join(','))
      .then((data) =>
        data.map((game) => ({
          ...game,
          status: GameStatus.Finished,
          score: {
            winner: Winner.HomeTeam,
            duration: 'REGULAR',
            fullTime: {
              home: 3,
              away: 0,
            },
            halfTime: {
              home: 1,
              away: 0,
            },
          },
        })),
      );

    if (!finishedGames.length) {
      return [];
    }

    const updatedGames: Game[] = [];
    for (const finishedGame of finishedGames) {
      const updatedGame: Game = await this.gameRepository.findOneAndUpdate(
        {
          externalId: finishedGame.externalId,
          status: GameStatus.Scheduled,
        },
        {
          homeScore: finishedGame.score.fullTime.home,
          awayScore: finishedGame.score.fullTime.away,
          winner: finishedGame.score.winner,
          status: finishedGame.status,
        },
      );

      if (updatedGame) {
        updatedGames.push(updatedGame);
      }
    }

    return updatedGames;
  }

  async getGames(filters: BetFilters): Promise<Game[]> {
    const { userId, status, from, to } = filters;
    const userGameBets: GameBet[] = await this.gameBetRepository.getMany({
      status: BetStatus.Scheduled,
      createdBy: userId,
    });

    const games = await this.gameRepository.getMany({
      _id: {
        $nin: userGameBets.map((el) => el.game._id),
      },
      status,
    });

    const pipeline = [
      {
        $lookup: {
          from: 'team',
          localField: 'homeTeam',
          foreignField: '_id',
          as: 'homeTeam',
        },
      },
      { $unwind: '$homeTeam' },
      {
        $lookup: {
          from: 'team',
          localField: 'awayTeam',
          foreignField: '_id',
          as: 'awayTeam',
        },
      },
      { $unwind: '$awayTeam' },
      {
        $match: {
          _id: {
            $nin: userGameBets.map((el) => el.game._id),
          },
          status,
          'homeTeam._id': { $in: games.map((el) => el.homeTeam) },
          'awayTeam._id': { $in: games.map((el) => el.awayTeam) },
          scheduledDate: {
            $gte: from ? new Date(from) : '',
            $lt: to ? new Date(to) : '',
          },
          // scheduledDate: {
          //   $gte: new Date(2012, 7, 14),
          //   $lt: new Date(2021, 7, 14),
          // },
        },
      },
    ];

    return await this.gameRepository.aggregate(pipeline);
  }
}
