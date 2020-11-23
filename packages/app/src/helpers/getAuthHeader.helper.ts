import {tokenService} from '../services';

export function getAuthHeader(): Record<string, string> {
    const tokens = tokenService.getTokens();
    return tokens ? {authorization: 'Bearer ' + tokens.accessToken} : {};
}
