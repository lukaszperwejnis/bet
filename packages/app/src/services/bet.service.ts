import {apiService, REQUEST_TYPES} from './api.service';
import {URLS} from '../urls';

type AvailableBetsResponse = {
    status: number;
    data: {
        availableGames: unknown;
        availableChampions: unknown;
    };
    message: string;
};

const getAvailableBets = async (): Promise<Response> => {
    const result = await apiService.authFetch(URLS.BET.BETS, {method: REQUEST_TYPES.GET});
    return result.json();
};

export const betService = {
    getAvailableBets,
};
