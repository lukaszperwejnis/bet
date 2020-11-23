"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_1 = require("./HttpError");
class PasswordMatchPreviousError extends HttpError_1.HttpError {
    constructor() {
        super(404, 'Password is the same like previous.');
    }
}
exports.PasswordMatchPreviousError = PasswordMatchPreviousError;
//# sourceMappingURL=PasswordMatchPreviousError.js.map