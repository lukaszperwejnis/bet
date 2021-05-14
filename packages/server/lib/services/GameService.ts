import { TeamRepository } from "../Repository/TeamRepository";
import { CreationTypes } from "../enums/creationTypes";
import { GameRepository } from "../Repository/GameRepository";
import { Game } from "../structures/Game";
import { ExternalGame } from "../interfaces/ExternalGame";
import { ExternalGamesService } from "./ExternalGamesService";
import { GameStatuses } from "../enums/gameStatuses";
import { GameBet } from "../structures/GameBet";
import { GameBetRepository } from "../Repository/GameBetRepository";
import { BetStatuses } from "../enums/betStatuses";

export class GameService {
  private gameRepository = new GameRepository();
  private teamRepository = new TeamRepository();
  private externalGamesService = new ExternalGamesService();
  private gameBetRepository = new GameBetRepository();

  async addScheduledMatchesToDatabase() {
    const scheduledGames: ExternalGame[] = await this.externalGamesService.getScheduledGames();
    const gamesToAdd: Game[] = await this.mapToGames(scheduledGames);
    const createdMatches: Game[] = await this.createGames(gamesToAdd);
    if (createdMatches.length) {
      // console.log({
      //     createdMatches
      // });
    }
  }

  private mapToGames(matches: ExternalGame[]): Promise<Game[]> {
    return Promise.all(
      matches.map(async ({ homeTeam, awayTeam, score, ...values }) => {
        const homeTeamDoc = await this.teamRepository.getOne({
          externalId: homeTeam.externalId,
        });
        const awayTeamDoc = await this.teamRepository.getOne({
          externalId: awayTeam.externalId,
        });
        return {
          ...values,
          creationType: CreationTypes.EXTERNAL,
          homeTeam: homeTeamDoc,
          awayTeam: awayTeamDoc,
          winner: score.winner,
          homeScore: score.fullTime.homeTeam,
          awayScore: score.fullTime.awayTeam,
        };
      })
    );
  }

  private async createGames(matches: Game[]): Promise<Game[]> {
    const addedMatches = [];
    for (let betToAdd of matches) {
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
    const finishedGames = await this.externalGamesService
      .getGamesByStages(stages.join(","))
      .then((data) =>
        data.filter((game) => game.status === GameStatuses.FINISHED)
      );

    if (!finishedGames.length) {
      return [];
    }

    const updatedGames: Game[] = [];
    for (let finishedGame of finishedGames) {
      const updatedGame: Game = await this.gameRepository.findOneAndUpdate(
        {
          externalId: finishedGame.externalId,
          status: GameStatuses.SCHEDULED,
        },
        {
          homeScore: finishedGame.score.fullTime.homeTeam,
          awayScore: finishedGame.score.fullTime.awayTeam,
          winner: finishedGame.score.winner,
          status: finishedGame.status,
        }
      );

      updatedGame && updatedGames.push(updatedGame);
    }

    return updatedGames;
  }

  async getAvailableByUserId(userId: string): Promise<Game[]> {
    const userGameBets: GameBet[] = await this.gameBetRepository.getMany({
      status: BetStatuses.SCHEDULED,
      createdBy: userId,
    });

    const test = userGameBets.map((el) => el.game._id);
    console.log(test, "userGameBets");

    const games = await this.gameRepository.getMany({
      _id: {
        $nin: userGameBets.map((el) => el.game._id),
      },
      status: GameStatuses.SCHEDULED,
    });

    console.log(games, "GAMES");

    const pipeline = [
      {
        $lookup: {
          from: "team",
          localField: "homeTeam",
          foreignField: "_id",
          as: "homeTeam",
        },
      },
      { $unwind: "$homeTeam" },
      {
        $lookup: {
          from: "team",
          localField: "awayTeam",
          foreignField: "_id",
          as: "awayTeam",
        },
      },
      { $unwind: "$awayTeam" },
      {
        $match: {
          _id: {
            $nin: userGameBets.map((el) => el.game._id),
          },
          status: GameStatuses.SCHEDULED,
          "homeTeam._id": { $in: games.map((el) => el.homeTeam) },
          "awayTeam._id": { $in: games.map((el) => el.awayTeam) },
        },
      },
    ];

    return await this.gameRepository.aggregate(pipeline);
  }
}
