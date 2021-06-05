import faker from 'faker';
import fetch from 'jest-fetch-mock';
describe('api.service', () => {
    describe('get', () => {
        it('request', () => {
            const expectedResponse = {
                status: 200,
            };
            fetch.mockResponseOnce(JSON.stringify(expectedResponse));
            const sampleUrl = faker.internet.url();
            // apiService.get(sampleUrl);
            // expect(window.fetch).toHaveBeenCalledWith(
            //   sampleUrl,
            //   expect.objectContaining(getHttpRequestInitObject(REQUEST_TYPES.GET)),
            // );
        });
    });
    describe('post', () => {
        it('request', () => {
            const expectedResponse = {
                status: 200,
            };
            fetch.mockResponseOnce(JSON.stringify(expectedResponse));
            const sampleUrl = faker.internet.url();
            const sampleBody = {
                username: faker.internet.userName(),
                password: faker.internet.password(),
            };
            // apiService.post(sampleUrl, sampleBody);
            // expect(window.fetch).toHaveBeenCalledWith(
            //   sampleUrl,
            //   expect.objectContaining(
            //     getHttpRequestInitObject(REQUEST_TYPES.POST, sampleBody),
            //   ),
            // );
        });
    });
});
