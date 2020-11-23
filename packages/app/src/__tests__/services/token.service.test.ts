import fetch from 'jest-fetch-mock';
import {tokenService} from '../../services';
import {getRandomToken} from '../../../test/helpers/getRandomToken';
import {URLS} from '../../urls';
import {getHttpRequestInitObject} from '../../helpers';
import {REQUEST_TYPES} from '../../services/api.service';

beforeEach(() => {
    fetch.resetMocks();
    tokenService.clearTokens();
});

const GET_REQUEST_INIT_OBJECT = getHttpRequestInitObject(REQUEST_TYPES.GET);

describe('token.service', () => {
    // describe('setAccessToken', () => {
    //     const localStorageSpy = jest.spyOn(Storage.prototype, 'setItem');
    //     const sampleAccessToken = getRandomToken();
    //
    //     tokenService.setAccessToken(sampleAccessToken);
    //
    //     it('success', () => {
    //         expect(localStorageSpy).toHaveBeenCalledWith('accessToken', sampleAccessToken);
    //     });
    // });
    //
    // describe('getAccessToken', () => {
    //     it('success', () => {
    //         const sampleAccessToken = getRandomToken();
    //         tokenService.setAccessToken(sampleAccessToken);
    //
    //         const result = tokenService.getAccessToken();
    //         expect(result).toBe(sampleAccessToken);
    //     });
    // });
    //
    // describe('setRefreshToken', () => {
    //     const localStorageSpy = jest.spyOn(Storage.prototype, 'setItem');
    //     const sampleAccessToken = getRandomToken();
    //
    //     tokenService.setRefreshToken(sampleAccessToken);
    //
    //     it('success', () => {
    //         expect(localStorageSpy).toHaveBeenCalledWith('refreshToken', sampleAccessToken);
    //     });
    // });
    //
    // describe('getRefreshToken', () => {
    //     it('success', () => {
    //         const sampleRefreshToken = getRandomToken();
    //         tokenService.setRefreshToken(sampleRefreshToken);
    //
    //         const result = tokenService.getRefreshToken();
    //         expect(result).toBe(sampleRefreshToken);
    //     });
    // });
    //
    // describe('clearTokens', () => {
    //     const localStorageSpy = jest.spyOn(Storage.prototype, 'clear');
    //
    //     tokenService.clearTokens();
    //     it('success', () => {
    //         expect(localStorageSpy).toHaveBeenCalledWith();
    //     });
    // });
    //
    // describe('validateRefreshToken', () => {
    //     it('Failed invalid refreshToken', async () => {
    //         const expectedResponse = {
    //             status: 500,
    //         };
    //
    //         const sampleRefreshToken = getRandomToken();
    //         tokenService.setRefreshToken(sampleRefreshToken);
    //
    //         fetch.mockResponseOnce(JSON.stringify(expectedResponse));
    //
    //         const result = await tokenService.validateRefreshToken();
    //
    //         expect(window.fetch).toHaveBeenCalledWith(
    //             URLS.TOKENS.REFRESH_TOKEN + sampleRefreshToken,
    //             expect.objectContaining(GET_REQUEST_INIT_OBJECT)
    //         );
    //         expect(result).toEqual(expectedResponse);
    //     });
    //
    //     it('Success', async () => {
    //         const expectedResponse = {
    //             status: 200,
    //             data: {
    //                 accessToken: getRandomToken(),
    //                 refreshToken: getRandomToken(),
    //             },
    //         };
    //
    //         const sampleRefreshToken = getRandomToken();
    //         tokenService.setRefreshToken(sampleRefreshToken);
    //
    //         fetch.mockResponseOnce(JSON.stringify(expectedResponse));
    //
    //         const result = await tokenService.validateRefreshToken();
    //
    //         expect(window.fetch).toHaveBeenCalledWith(
    //             URLS.TOKENS.REFRESH_TOKEN + sampleRefreshToken,
    //             expect.objectContaining(GET_REQUEST_INIT_OBJECT)
    //         );
    //         expect(result).toEqual(expectedResponse);
    //     });
    // });
});
