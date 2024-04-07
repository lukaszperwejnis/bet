import {
  BetStatus,
  ChampionBet,
  ChampionBetInput,
  Game,
  GameBet,
  GameBetInput,
  GameStatus,
  Team,
} from '@bet/structures';
import { URLS } from '../urls';
import { ApiService } from './ApiService/ApiService';

type UserBetsFilters = {
  status: BetStatus;
};

export class BetService extends ApiService {
  getAvailableBets = async (): Promise<{
    data: {
      availableGames: Game[];
      availableChampions: Team.Team[];
    };
  }> =>
    this.get(
      `${URLS.BETS.GET}?status=${GameStatus.Scheduled}&from=2021-09-12T14:50:47.932Z&to=2023-09-20T14:50:47.932Z`,
      {
        authRequired: true,
      },
    );

  getUserBets = async ({
    status,
  }: UserBetsFilters): Promise<{
    gameBets: GameBet[];
    championBet: ChampionBet | null;
  }> =>
    this.get(`${URLS.BETS.USER}?status=${status}`, {
      authRequired: true,
    });

  createBets = async (payload: {
    games?: GameBetInput[];
    champion?: ChampionBetInput;
  }): Promise<unknown> => {
    console.log({ payload }, 'CREATE BETS');
    return this.post(URLS.BETS.CREATE, { payload, authRequired: true });
  };
}

export const betService = new BetService();
