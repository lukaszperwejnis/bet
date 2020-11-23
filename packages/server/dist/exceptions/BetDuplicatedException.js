"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("./HttpException");
class BetDuplicatedException extends HttpException_1.HttpException {
    constructor() {
        super(409, `Bet with that home, away, round and scheduled date already exist`);
    }
}
exports.BetDuplicatedException = BetDuplicatedException;
//# sourceMappingURL=BetDuplicatedException.js.map