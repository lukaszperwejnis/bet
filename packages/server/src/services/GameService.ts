import { BetStatus, GameStatus } from "@bet/structures";
import { TeamRepository } from "../Repository/TeamRepository";
import { CreationType } from "../enums";
import { GameRepository } from "../Repository/GameRepository";
import { Game } from "../structures/Game";
import { ExternalGame } from "../interfaces/ExternalGame";
import { ExternalGamesService } from "./ExternalGamesService";
import { GameBet } from "../structures/GameBet";
import { GameBetRepository } from "../Repository/GameBetRepository";

export class GameService {
  private gameRepository = new GameRepository();
  private teamRepository = new TeamRepository();
  private externalGamesService = new ExternalGamesService();
  private gameBetRepository = new GameBetRepository();

  async addScheduledMatchesToDatabase() {
    const scheduledGames: ExternalGame[] = await this.externalGamesService.getScheduledGames();
    const gamesToAdd: Game[] = await this.mapToGames(scheduledGames);
    await this.createGames(gamesToAdd);
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
          creationType: CreationType.External,
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
        data.filter((game) => game.status === GameStatus.Finished)
      );

    if (!finishedGames.length) {
      return [];
    }

    const updatedGames: Game[] = [];
    for (let finishedGame of finishedGames) {
      const updatedGame: Game = await this.gameRepository.findOneAndUpdate(
        {
          externalId: finishedGame.externalId,
          status: GameStatus.Scheduled,
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
      status: BetStatus.Scheduled,
      createdBy: userId,
    });

    const games = await this.gameRepository.getMany({
      _id: {
        $nin: userGameBets.map((el) => el.game._id),
      },
      status: GameStatus.Scheduled,
    });

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
          status: GameStatus.Scheduled,
          "homeTeam._id": { $in: games.map((el) => el.homeTeam) },
          "awayTeam._id": { $in: games.map((el) => el.awayTeam) },
        },
      },
    ];

    return await this.gameRepository.aggregate(pipeline);
  }
}
