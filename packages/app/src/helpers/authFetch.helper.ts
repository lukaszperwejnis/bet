import {tokenService} from '../services';
import {CONFIG} from '../config';

export async function authFetch(input: RequestInfo, init?: RequestInit): Promise<Response> {
    const accessToken = await tokenService.getAccessToken();

    init = init || {};

    init.headers = {
        ...init.headers,
        'Content-Type': 'application/json',
        Origin: CONFIG.API_URL,
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${accessToken}`,
    };

    return fetch(input, init);
}
