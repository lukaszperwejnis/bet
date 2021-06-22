"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMappedRequestOptions = void 0;
const token_service_1 = require("../token.service");
const config_1 = require("../../config");
// import { ErrorCodes } from '@constants';
// import { cookieAuthService } from '@services';
// import { MissingAuthTokenError } from '@errors';
const baseHeaders = {
    'Content-Type': 'application/json',
    Origin: config_1.CONFIG.API_URL,
    'Access-Control-Allow-Origin': '*',
};
// type ErrorsValidationReturnType = {
//     hasInternalError: boolean;
//     hasInvalidRefreshToken: boolean;
//     hasInvalidAccessToken: boolean;
// };
// export function getErrorsValidationByResponse(
//     error: AxiosError,
// ): ErrorsValidationReturnType {
//     if (!error.response || !error.config || !error.config.url) {
//         return {
//             hasInternalError: false,
//             hasInvalidRefreshToken: false,
//             hasInvalidAccessToken: false,
//         };
//     }
//     return {
//         hasInternalError:
//             error.response.status >= ErrorCodes.INTERNAL_SERVER_ERROR &&
//             error.response.status !== ErrorCodes.BAD_GATEWAY &&
//             error.response.status !== ErrorCodes.SERVICE_UNAVAILABLE,
//         hasInvalidRefreshToken:
//             error.response.status === ErrorCodes.UNAUTHORIZED &&
//             error.config.url.includes('refresh-token'),
//         hasInvalidAccessToken:
//             error.response.status === ErrorCodes.UNAUTHORIZED &&
//             !error.config.url.includes('login'),
//     };
// }
function getMappedRequestOptions(options) {
    const { authRequired, requestConfig } = options;
    if (!authRequired && !requestConfig) {
        return {
            headers: Object.assign({}, baseHeaders),
        };
    }
    if (!authRequired && requestConfig) {
        return Object.assign({ headers: Object.assign({}, baseHeaders) }, requestConfig);
    }
    const token = token_service_1.tokenService.getAccessToken();
    console.log(token);
    if (!token) {
        throw new Error('Missing access token');
    }
    return Object.assign({ headers: Object.assign(Object.assign({}, baseHeaders), { Authorization: `Bearer ${token}` }) }, options.requestConfig);
}
exports.getMappedRequestOptions = getMappedRequestOptions;
