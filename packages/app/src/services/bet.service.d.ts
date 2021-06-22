import { ApiService } from './ApiService/ApiService';
export declare class BetService extends ApiService {
    getAvailableBets: <T>() => Promise<T>;
    getUserBets: () => Promise<unknown>;
    createBets: (payload: any) => Promise<unknown>;
}
export declare const betService: BetService;
