"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_1 = require("./HttpError");
class BetAlredyExistError extends HttpError_1.HttpError {
    constructor(gameId) {
        super(409, `Bet for that gameId ${gameId} already exist`);
    }
}
exports.BetAlredyExistError = BetAlredyExistError;
//# sourceMappingURL=BetAlredyExistError.js.map