import {getAuthHeader} from '../../helpers';
import {getRandomToken} from '../../../test/helpers/getRandomToken';
import {tokenService} from '../../services';

afterAll(() => {
    tokenService.clearTokens();
});

describe('getAuthHeader.helper', () => {
    it('Empty object', () => {
        const result = getAuthHeader();

        expect(result).toEqual({});
    });

    it('Proper authorization object', () => {
        const sampleAccessToken = getRandomToken();
        const expectedResult = {
            authorization: 'Bearer ' + sampleAccessToken,
        };

        tokenService.setAccessToken(sampleAccessToken);

        const result = getAuthHeader();

        expect(result).toEqual(expectedResult);
    });
});
