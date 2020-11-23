"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("./HttpException");
class TeamNameDuplicatedException extends HttpException_1.HttpException {
    constructor(name) {
        super(409, `Team with name ${name} already exist.`);
    }
}
exports.TeamNameDuplicatedException = TeamNameDuplicatedException;
//# sourceMappingURL=TeamNameDuplicatedException.js.map