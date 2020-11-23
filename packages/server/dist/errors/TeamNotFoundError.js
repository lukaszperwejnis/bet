"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_1 = require("./HttpError");
class TeamNotFoundError extends HttpError_1.HttpError {
    constructor(id) {
        super(404, `Team with id ${id} not found`);
    }
}
exports.TeamNotFoundError = TeamNotFoundError;
//# sourceMappingURL=TeamNotFoundError.js.map