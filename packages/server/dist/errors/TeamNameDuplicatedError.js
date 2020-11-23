"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_1 = require("./HttpError");
class TeamNameDuplicatedError extends HttpError_1.HttpError {
    constructor(name) {
        super(409, `Team with name ${name} already exist.`);
    }
}
exports.TeamNameDuplicatedError = TeamNameDuplicatedError;
//# sourceMappingURL=TeamNameDuplicatedError.js.map