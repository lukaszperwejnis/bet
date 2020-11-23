"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_1 = require("./HttpError");
class UserNotFoundError extends HttpError_1.HttpError {
    constructor(id) {
        super(404, `User with that id ${id} not found.`);
    }
}
exports.UserNotFoundError = UserNotFoundError;
//# sourceMappingURL=UserNotFoundError.js.map