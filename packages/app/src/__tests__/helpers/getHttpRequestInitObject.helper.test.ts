import faker from 'faker';
import {getHttpRequestInitObject} from '../../helpers';
import {REQUEST_TYPES} from '../../services/api.service';
import {CONFIG} from '../../config';
import {getRandomToken} from '../../../test/helpers/getRandomToken';
import {tokenService} from '../../services';

describe('getHttpRequestInitObject.helper', () => {
    const requestTypes = Object.values(REQUEST_TYPES);
    describe('Default object with empty auth object and empty body', () => {
        requestTypes.forEach((requestType: string) => {
            it(`method ${requestType.toUpperCase()}`, () => {
                const expectedResult = {
                    method: requestType,
                    headers: {
                        'Content-Type': 'application/json',
                        Origin: CONFIG.API_URL,
                        'Access-Control-Allow-Origin': '*',
                    },
                };

                const result = getHttpRequestInitObject(requestType);

                expect(result).toEqual(expectedResult);
            });
        });
    });

    describe('Object with accessToken', () => {
        requestTypes.forEach((requestType: string) => {
            it(`method ${requestType.toUpperCase()}`, () => {
                const sampleAccessToken = getRandomToken();
                tokenService.setAccessToken(sampleAccessToken);

                const expectedResult = {
                    method: requestType,
                    headers: {
                        'Content-Type': 'application/json',
                        Origin: CONFIG.API_URL,
                        'Access-Control-Allow-Origin': '*',
                        authorization: 'Bearer ' + sampleAccessToken,
                    },
                };

                const result = getHttpRequestInitObject(requestType);

                expect(result).toEqual(expectedResult);
            });
        });

        afterEach(() => {
            tokenService.clearTokens();
        });
    });

    describe('Object with body', () => {
        requestTypes.forEach((requestType: string) => {
            it(`method ${requestType.toUpperCase()}`, () => {
                const sampleBody = {
                    username: faker.internet.userName(),
                    password: faker.internet.password(),
                };

                const expectedResult = {
                    method: requestType,
                    headers: {
                        'Content-Type': 'application/json',
                        Origin: CONFIG.API_URL,
                        'Access-Control-Allow-Origin': '*',
                    },
                    body: JSON.stringify(sampleBody),
                };

                const result = getHttpRequestInitObject(requestType, sampleBody);

                expect(result).toEqual(expectedResult);
            });
        });
    });
});
