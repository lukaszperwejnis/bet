import {CONFIG} from '../config';

export function getHttpRequestInitObject(method: string, data?: Record<string, unknown>): RequestInit {
    return Object.assign(
        {
            method,
            headers: {
                'Content-Type': 'application/json',
                Origin: CONFIG.API_URL,
                'Access-Control-Allow-Origin': '*',
            },
        },
        data ? {body: JSON.stringify(data)} : {}
    );
}
