"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("./HttpException");
class BetLateException extends HttpException_1.HttpException {
    constructor(id) {
        super(400, `Bet with id ${id} is too late`);
    }
}
exports.BetLateException = BetLateException;
//# sourceMappingURL=BetLateException.js.map