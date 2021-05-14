import { URLS } from '../urls';
import { ApiService } from './ApiService/ApiService';

// type AvailableBetsResponse = {
//   status: number;
//   data: {
//     availableGames: unknown;
//     availableChampions: unknown;
//   };
//   message: string;
// };

export class BetService extends ApiService {
  getAvailableBets = async <T>(): Promise<T> =>
    this.get<T>(URLS.BET.AVAILABLE, { authRequired: true });

  getUserBets = async () => this.get(URLS.BET.USER, { authRequired: true });

  createBets = async (payload: any) =>
    this.post(URLS.BET.CREATE, { payload, authRequired: true });
}

export const betService = new BetService();
