"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("./HttpException");
class MatchNotFoundException extends HttpException_1.HttpException {
    constructor(id) {
        super(404, `Match with that id ${id} not found.`);
    }
}
exports.MatchNotFoundException = MatchNotFoundException;
//# sourceMappingURL=GameNotFoundError.js.map
