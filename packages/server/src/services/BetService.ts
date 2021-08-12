import { Team } from '@bet/structures';
import { GameService } from './GameService';
import { ChampionBetService } from './ChampionBetService';
import { Game } from '../structures/Game';
import { GameBetService } from './GameBetService';
import { GameBetRepository } from '../Repository/GameBetRepository';
import { ChampionBetRepository } from '../Repository/ChampionBetRepository';
import { GameBet } from '../structures/GameBet';
import { ChampionBet } from '../structures/ChampionBet';

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

  async getAvailableBetsByUserId(
    userId: string,
  ): Promise<{ availableGames: Game[]; availableChampions: Team.Team[] }> {
    const availableGames: Game[] = await this.gameService.getAvailableByUserId(
      userId,
    );
    const availableChampions: Team.Team[] =
      await this.championBetService.getAvailableByUserId(userId);
    return {
      availableGames,
      availableChampions,
    };
  }

  async createBets(
    userId: string,
    { games, champion }: CreateBetsInput,
  ): Promise<unknown> {
    let result = {};

    const hasValidGameBets = games
      ? await this.gameBetService.hasValidBets(userId, games)
      : false;

    const hasValidChampionBet = champion
      ? await this.championBetService.isValidBet(userId, champion)
      : false;

    if (hasValidGameBets && games) {
      const gameBets = await Promise.all(
        games.map((game) => this.gameBetService.createOne(userId, game)),
      );

      result = {
        ...result,
        gameBets,
      };
    }

    if (hasValidChampionBet && champion) {
      const championBet = await this.championBetService.createOne(
        userId,
        champion,
      );

      result = {
        ...result,
        championBet,
      };
    }

    return result;
  }

  async getBetsByUserId(userId: string): Promise<{
    gameBets: GameBet[];
    championBet: ChampionBet[];
  }> {
    const gameBetsPipeline = [
      {
        $lookup: {
          from: 'game',
          localField: 'game',
          foreignField: '_id',
          as: 'game',
        },
      },
      { $unwind: '$game' },
      {
        $match: {
          createdBy: userId,
        },
      },
      {
        $lookup: {
          from: 'team',
          localField: 'game.homeTeam',
          foreignField: '_id',
          as: 'game.homeTeam',
        },
      },
      { $unwind: '$game.homeTeam' },
      {
        $lookup: {
          from: 'team',
          localField: 'game.awayTeam',
          foreignField: '_id',
          as: 'game.awayTeam',
        },
      },
      { $unwind: '$game.awayTeam' },
    ];

    const championBetPipeline = [
      {
        $lookup: {
          from: 'team',
          localField: 'bet',
          foreignField: '_id',
          as: 'bet',
        },
      },
      { $unwind: '$bet' },
      {
        $match: {
          createdBy: userId,
        },
      },
    ];

    return {
      gameBets: await this.gameBetRepository.aggregate(gameBetsPipeline),
      championBet: await this.championBetRepository.aggregate(
        championBetPipeline,
      ),
    };
  }
}
