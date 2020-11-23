"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_1 = require("./HttpError");
class TokenExpiredError extends HttpError_1.HttpError {
    constructor() {
        super(401, 'Token expired');
    }
}
exports.TokenExpiredError = TokenExpiredError;
//# sourceMappingURL=TokenExpiredError.js.map