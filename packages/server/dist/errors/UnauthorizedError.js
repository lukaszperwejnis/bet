"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_1 = require("./HttpError");
class UnauthorizedError extends HttpError_1.HttpError {
    constructor() {
        super(401, 'Unauthorized');
    }
}
exports.UnauthorizedError = UnauthorizedError;
//# sourceMappingURL=UnauthorizedError.js.map