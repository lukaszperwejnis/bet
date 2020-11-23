"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("./HttpException");
class BetNotFoundException extends HttpException_1.HttpException {
    constructor(id) {
        super(404, `Bet with that id ${id} not found.`);
    }
}
exports.BetNotFoundException = BetNotFoundException;
//# sourceMappingURL=BetNotFoundException.js.map