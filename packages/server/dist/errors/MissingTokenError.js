"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_1 = require("./HttpError");
class MissingTokenError extends HttpError_1.HttpError {
    constructor() {
        super(404, 'Missing token');
    }
}
exports.MissingTokenError = MissingTokenError;
//# sourceMappingURL=MissingTokenError.js.map