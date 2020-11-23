import faker from 'faker';
import fetch from 'jest-fetch-mock';
import {tokenService, userService} from '../../services';
import {URLS} from '../../urls';
import {getRandomToken} from '../../../test/helpers/getRandomToken';
import {getHttpRequestInitObject} from '../../helpers';
import {REQUEST_TYPES} from '../../services/api.service';

beforeEach(() => {
    fetch.resetMocks();
});

describe('user.service', () => {
    // describe('login', () => {
    //     it('Failed because of missing password', async () => {
    //         const expectedResponse = {
    //             status: 400,
    //             body: {
    //                 status: 400,
    //                 message: 'Fields validation failed',
    //                 errors: [
    //                     {
    //                         field: 'password',
    //                     },
    //                 ],
    //             },
    //         };
    //
    //         const sampleInput = {
    //             username: faker.internet.email(),
    //             password: '',
    //         };
    //
    //         fetch.mockResponseOnce(JSON.stringify(expectedResponse));
    //
    //         const result = await userService.login(sampleInput);
    //
    //         expect(window.fetch).toHaveBeenCalledWith(
    //             URLS.USER.SIGNIN,
    //             expect.objectContaining(getHttpRequestInitObject(REQUEST_TYPES.POST, sampleInput))
    //         );
    //         expect(result).toEqual(expectedResponse);
    //     });
    //
    //     it('Failed because of missing username', async () => {
    //         const expectedResponse = {
    //             status: 400,
    //             body: {
    //                 status: 400,
    //                 message: 'Fields validation failed',
    //                 errors: [
    //                     {
    //                         field: 'username',
    //                     },
    //                 ],
    //             },
    //         };
    //
    //         const sampleInput = {
    //             username: '',
    //             password: faker.internet.password(),
    //         };
    //
    //         fetch.mockResponseOnce(JSON.stringify(expectedResponse));
    //
    //         const result = await userService.login(sampleInput);
    //
    //         expect(window.fetch).toHaveBeenCalledWith(
    //             URLS.USER.SIGNIN,
    //             expect.objectContaining(getHttpRequestInitObject(REQUEST_TYPES.POST, sampleInput))
    //         );
    //         expect(result).toEqual(expectedResponse);
    //     });
    //
    //     it('Success', async () => {
    //         const expectedResponse = {
    //             data: {
    //                 accessToken: getRandomToken(),
    //                 refreshToken: getRandomToken(),
    //             },
    //         };
    //
    //         const sampleInput = {
    //             username: faker.internet.email(),
    //             password: faker.internet.password(),
    //         };
    //
    //         fetch.mockResponseOnce(JSON.stringify(expectedResponse));
    //
    //         const result = await userService.login(sampleInput);
    //
    //         expect(window.fetch).toHaveBeenCalledWith(
    //             URLS.USER.SIGNIN,
    //             expect.objectContaining(getHttpRequestInitObject(REQUEST_TYPES.POST, sampleInput))
    //         );
    //         expect(result).toEqual(expectedResponse);
    //     });
    // });
    //
    // describe('logout', () => {
    //     it('Should call clear method from localStorage', () => {
    //         const localStorageSpy = jest.spyOn(Storage.prototype, 'clear');
    //
    //         userService.logout();
    //
    //         expect(localStorageSpy).toHaveBeenCalledWith();
    //     });
    // });
    //
    // describe('signup', () => {
    //     it('Failed because of missing token', async () => {
    //         const expectedResponse = {
    //             status: 400,
    //             body: {
    //                 status: 400,
    //                 message: 'Fields validation failed',
    //                 errors: [
    //                     {
    //                         field: 'token',
    //                     },
    //                 ],
    //             },
    //         };
    //
    //         const sampleInput = {
    //             token: getRandomToken(),
    //             password: '',
    //         };
    //
    //         fetch.mockResponseOnce(JSON.stringify(expectedResponse));
    //
    //         const result = await userService.signup(sampleInput);
    //
    //         expect(window.fetch).toHaveBeenCalledWith(
    //             URLS.USER.SIGNUP,
    //             expect.objectContaining(getHttpRequestInitObject(REQUEST_TYPES.POST, sampleInput))
    //         );
    //         expect(result).toEqual(expectedResponse);
    //     });
    //
    //     it('Failed because of missing password', async () => {
    //         const expectedResponse = {
    //             status: 400,
    //             body: {
    //                 status: 400,
    //                 message: 'Fields validation failed',
    //                 errors: [
    //                     {
    //                         field: 'password',
    //                     },
    //                 ],
    //             },
    //         };
    //
    //         const sampleInput = {
    //             token: getRandomToken(),
    //             password: faker.internet.password(),
    //         };
    //
    //         fetch.mockResponseOnce(JSON.stringify(expectedResponse));
    //
    //         const result = await userService.signup(sampleInput);
    //
    //         expect(window.fetch).toHaveBeenCalledWith(
    //             URLS.USER.SIGNUP,
    //             expect.objectContaining(getHttpRequestInitObject(REQUEST_TYPES.POST, sampleInput))
    //         );
    //         expect(result).toEqual(expectedResponse);
    //     });
    //
    //     it('Success', async () => {
    //         const expectedResponse = {
    //             data: {
    //                 accessToken: getRandomToken(),
    //                 refreshToken: getRandomToken(),
    //             },
    //         };
    //
    //         const sampleInput = {
    //             token: getRandomToken(),
    //             password: faker.internet.password(),
    //         };
    //
    //         fetch.mockResponseOnce(JSON.stringify(expectedResponse));
    //
    //         const result = await userService.signup(sampleInput);
    //
    //         expect(window.fetch).toHaveBeenCalledWith(
    //             URLS.USER.SIGNUP,
    //             expect.objectContaining(getHttpRequestInitObject(REQUEST_TYPES.POST, sampleInput))
    //         );
    //         expect(result).toEqual(expectedResponse);
    //     });
    // });
    //
    // describe('validateInvitationToken', () => {
    //     it('Failed because of invalid token', async () => {
    //         const expectedResponse = {
    //             status: 500,
    //         };
    //
    //         const sampleToken = getRandomToken();
    //
    //         fetch.mockResponseOnce(JSON.stringify(expectedResponse));
    //
    //         const result = await userService.validateInvitationToken(sampleToken);
    //
    //         expect(window.fetch).toHaveBeenCalledWith(
    //             URLS.TOKENS.MAIL_INVITATION + sampleToken,
    //             expect.objectContaining(getHttpRequestInitObject(REQUEST_TYPES.GET))
    //         );
    //         expect(result).toBeFalsy();
    //     });
    //
    //     it('Success', async () => {
    //         const expectedResponse = {
    //             status: 200,
    //             data: {
    //                 email: faker.internet.email(),
    //                 iat: faker.time.recent(),
    //                 exp: faker.time.recent(),
    //             },
    //         };
    //
    //         const sampleToken = getRandomToken();
    //
    //         fetch.mockResponseOnce(JSON.stringify(expectedResponse));
    //
    //         const result = await userService.validateInvitationToken(sampleToken);
    //
    //         expect(window.fetch).toHaveBeenCalledWith(
    //             URLS.TOKENS.MAIL_INVITATION + sampleToken,
    //             expect.objectContaining(getHttpRequestInitObject(REQUEST_TYPES.GET))
    //         );
    //         expect(result).toBeTruthy();
    //     });
    // });
    //
    // describe('isLoggedIn', () => {
    //     beforeEach(() => {
    //         tokenService.clearTokens();
    //     });
    //
    //     it('False because of missing tokens', async () => {
    //         const result = await userService.isLoggedIn();
    //
    //         expect(result).toBeFalsy();
    //     });
    //
    //     it('False because of missing refreshToken', async () => {
    //         const result = await userService.isLoggedIn();
    //
    //         const sampleToken = getRandomToken();
    //         tokenService.setAccessToken(sampleToken);
    //
    //         expect(result).toBeFalsy();
    //     });
    //
    //     it('False because of missing accessToken', async () => {
    //         const result = await userService.isLoggedIn();
    //
    //         const sampleToken = getRandomToken();
    //         tokenService.setRefreshToken(sampleToken);
    //
    //         expect(result).toBeFalsy();
    //     });
    //
    //     it('False because of invalid accessToken', async () => {
    //         const expectedResponse = {
    //             status: 500,
    //         };
    //
    //         const sampleAccessToken = getRandomToken();
    //         const sampleRefreshToken = getRandomToken();
    //
    //         tokenService.setAccessToken(sampleAccessToken);
    //         tokenService.setRefreshToken(sampleRefreshToken);
    //
    //         fetch.mockResponseOnce(JSON.stringify(expectedResponse));
    //
    //         const result = await userService.isLoggedIn();
    //
    //         expect(result).toBeFalsy();
    //     });
    //
    //     it('False because of invalid refreshToken', async () => {
    //         const expectedAccessTokenValidationResponse = {
    //             status: 200,
    //             data: {
    //                 iat: faker.random.number(),
    //                 exp: faker.random.number(),
    //             },
    //         };
    //
    //         const expectedRefreshTokenValidationResponse = {
    //             status: 500,
    //         };
    //
    //         const sampleAccessToken = getRandomToken();
    //         const sampleRefreshToken = getRandomToken();
    //
    //         tokenService.setAccessToken(sampleAccessToken);
    //         tokenService.setRefreshToken(sampleRefreshToken);
    //
    //         fetch.once(JSON.stringify(expectedAccessTokenValidationResponse)).once(JSON.stringify(expectedRefreshTokenValidationResponse));
    //
    //         const result = await userService.isLoggedIn();
    //
    //         expect(result).toBeFalsy();
    //     });
    //
    //     it('True, validAccessToken and validRefreshToken', async () => {
    //         const expectedAccessTokenValidationResponse = {
    //             status: 200,
    //             data: {
    //                 iat: faker.random.number(),
    //                 exp: faker.random.number(),
    //             },
    //         };
    //
    //         const expectedRefreshTokenValidationResponse = {
    //             status: 200,
    //             data: {
    //                 accessToken: getRandomToken(),
    //                 refreshToken: getRandomToken(),
    //             },
    //         };
    //
    //         const sampleAccessToken = getRandomToken();
    //         const sampleRefreshToken = getRandomToken();
    //
    //         tokenService.setAccessToken(sampleAccessToken);
    //         tokenService.setRefreshToken(sampleRefreshToken);
    //
    //         fetch.once(JSON.stringify(expectedAccessTokenValidationResponse)).once(JSON.stringify(expectedRefreshTokenValidationResponse));
    //
    //         const result = await userService.isLoggedIn();
    //
    //         expect(result).toBeTruthy();
    //     });
    // });
});
