"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("./HttpException");
class TeamNotFoundException extends HttpException_1.HttpException {
    constructor(id) {
        super(404, `Team with id ${id} not found`);
    }
}
exports.TeamNotFoundException = TeamNotFoundException;
//# sourceMappingURL=TeamNotFoundException.js.map