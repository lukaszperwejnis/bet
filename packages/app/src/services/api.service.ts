import {getHttpRequestInitObject} from '../helpers';
import {messageActions} from '../redux/actions';
import {tokenService} from './token.service';
import {CONFIG} from '../config';

export const REQUEST_TYPES = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    REMOVE: 'remove',
};

async function get<T>(url: string): Promise<T> {
    const initObject = {
        method: REQUEST_TYPES.GET,
        headers: {
            'Content-Type': 'application/json',
            Origin: CONFIG.API_URL,
            'Access-Control-Allow-Origin': '*',
        },
    };

    try {
        const response = await fetch(url, initObject);
        return await response.json();
    } catch (e) {
        console.log({e});
        messageActions.error('Błąd serwera');
    }
}

async function post<T>(url: string, data: Record<string, unknown>): Promise<T> {
    const initObject = getHttpRequestInitObject(REQUEST_TYPES.POST, data);
    try {
        const response = await fetch(url, initObject);
        const parsedResponse = await response.json();
        return {
            status: response.status,
            ...parsedResponse,
        };
    } catch (e) {
        console.log(e, 'e');
        messageActions.error('Błąd serwera');
    }
}

export const apiService = {
    get,
    post,
    authFetch,
};

async function authFetch(input: RequestInfo, init?: RequestInit): Promise<Response> {
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
