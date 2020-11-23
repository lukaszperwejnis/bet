"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_1 = require("./HttpError");
class MissingIdError extends HttpError_1.HttpError {
    constructor() {
        super(404, 'Missing id');
    }
}
exports.MissingIdError = MissingIdError;
//# sourceMappingURL=MissingIdError.js.map