"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_1 = require("./HttpError");
class UserAlreadyExistError extends HttpError_1.HttpError {
    constructor(email) {
        super(409, `User with that email ${email} already exist.`);
    }
}
exports.UserAlreadyExistError = UserAlreadyExistError;
//# sourceMappingURL=UserAlreadyExistError.js.map