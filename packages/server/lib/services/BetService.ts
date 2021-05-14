import { GameService } from "./GameService";
import { ChampionBetService } from "./ChampionBetService";
import { Game } from "../structures/Game";
import { Team } from "../structures/Team";
import { GameBetService } from "./GameBetService";
import { GameBetRepository } from "../Repository/GameBetRepository";
import { ChampionBetRepository } from "../Repository/ChampionBetRepository";

type GameBetInput = { gameId: string; homeScore: number; awayScore: number };
type ChampionBetInput = { teamId: string };

type CreateBetsInput = {
  games?: GameBetInput[];
  champion?: ChampionBetInput;
};

export class BetService {
  private gameService = new GameService();
  private gameBetService = new GameBetService();
  private championBetService = new ChampionBetService();
  private gameBetRepository = new GameBetRepository();
  private championBetRepository = new ChampionBetRepository();

  async getAvailableBetsByUserId(userId: string) {
    const availableGames: Game[] = await this.gameService.getAvailableByUserId(
      userId
    );
    const availableChampions: Team[] = await this.championBetService.getAvailableByUserId(
      userId
    );
    return {
      availableGames,
      availableChampions,
    };
  }

  async createBets(userId: string, { games, champion }: CreateBetsInput) {
    let result = {};

    const hasValidGameBets = await this.gameBetService.hasValidBets(
      userId,
      games
    );
    const hasValidChampionBet = await this.championBetService.isValidBet(
      userId,
      champion
    );

    console.log({
      hasValidGameBets,
      hasValidChampionBet,
    });

    if (hasValidGameBets) {
      const gameBets = await Promise.all(
        games.map((game) => this.gameBetService.createOne(userId, game))
      );

      result = {
        ...result,
        gameBets,
      };
    }

    if (hasValidChampionBet) {
      const championBet = await this.championBetService.createOne(
        userId,
        champion
      );

      result = {
        ...result,
        championBet,
      };
    }

    return result;
  }

  async getBetsByUserId(userId: string) {
    const gameBetsPipeline = [
      {
        $lookup: {
          from: "game",
          localField: "game",
          foreignField: "_id",
          as: "game",
        },
      },
      { $unwind: "$game" },
      {
        $match: {
          createdBy: userId,
        },
      },
      {
        $lookup: {
          from: "team",
          localField: "game.homeTeam",
          foreignField: "_id",
          as: "game.homeTeam",
        },
      },
      { $unwind: "$game.homeTeam" },
      {
        $lookup: {
          from: "team",
          localField: "game.awayTeam",
          foreignField: "_id",
          as: "game.awayTeam",
        },
      },
      { $unwind: "$game.awayTeam" },
    ];

    const championBetPipeline = [
      {
        $lookup: {
          from: "team",
          localField: "bet",
          foreignField: "_id",
          as: "bet",
        },
      },
      { $unwind: "$bet" },
      {
        $match: {
          createdBy: userId,
        },
      },
    ];

    return {
      gameBets: await this.gameBetRepository.aggregate(gameBetsPipeline),
      championBet: await this.championBetRepository.aggregate(
        championBetPipeline
      ),
    };
  }
}
