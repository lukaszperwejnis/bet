import { GameStatus } from '@bet/structures';
import { URLS } from '../urls';
import { ApiService } from './ApiService/ApiService';

type UserBetsFilters = {
  status: GameStatus;
};

export class BetService extends ApiService {
  getAvailableBets = async <T>(): Promise<T> =>
    this.get<T>(`${URLS.BETS.GET}?status=${GameStatus.Scheduled}`, {
      authRequired: true,
    });

  getUserBets = async ({ status }: UserBetsFilters): Promise<unknown> =>
    this.get(`${URLS.BETS.USER}?status=${status}`, {
      authRequired: true,
    });

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  createBets = async (payload: any) =>
    this.post(URLS.BETS.CREATE, { payload, authRequired: true });
}

export const betService = new BetService();
