"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_1 = require("./HttpError");
class BetLateError extends HttpError_1.HttpError {
    constructor(id) {
        super(400, `Bet with id ${id} is too late`);
    }
}
exports.BetLateError = BetLateError;
//# sourceMappingURL=BetLateError.js.map