"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_1 = require("./HttpError");
class UserByEmailNotFoundError extends HttpError_1.HttpError {
    constructor(email) {
        super(404, `User with that email ${email} not found.`);
    }
}
exports.UserByEmailNotFoundError = UserByEmailNotFoundError;
//# sourceMappingURL=UserByEmailNotFoundError.js.map