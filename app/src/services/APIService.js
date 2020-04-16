import {TokenService} from "./TokenService";

const REQUEST_TYPES = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    REMOVE: 'remove'
};

const API_URL = 'http://127.0.0.1:3010';

export class APIService {
    async get(url, data) {
        const initObject = getInitObject(REQUEST_TYPES.GET, data);
        try {
            const response = await fetch(API_URL + url, initObject);
            return await response.json()
        } catch (e) {
            console.log({e});
        }
    }


    async post(url, data) {
        const initObject = getInitObject(REQUEST_TYPES.POST, data);
        try {
            const response = await fetch(API_URL + url, initObject);
            return response.json();
        } catch (e) {
            console.log({e});
        }
    }
}

function getInitObject(method, data) {
    const accessToken = new TokenService().getAccessToken();
    return Object.assign({
            method,
            headers: {
                'Content-Type': 'application/json',
                'Origin': API_URL,
                'Access-Control-Allow-Origin': true,
                ...(accessToken ? {'authorization': `Bearer ${accessToken}`} : {})
            },
        },
        data ? {body: JSON.stringify(data)} : {})
}
