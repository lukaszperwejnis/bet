"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("./HttpException");
class UserAlreadyExistException extends HttpException_1.HttpException {
    constructor(email) {
        super(409, `User with that email ${email} already exist.`);
    }
}
exports.UserAlreadyExistException = UserAlreadyExistException;
//# sourceMappingURL=UserAlreadyExistException.js.map