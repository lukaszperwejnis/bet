"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_1 = require("./HttpError");
class BetNotFoundError extends HttpError_1.HttpError {
    constructor(id) {
        super(404, `Bet with that id ${id} not found.`);
    }
}
exports.BetNotFoundError = BetNotFoundError;
//# sourceMappingURL=BetNotFoundError.js.map