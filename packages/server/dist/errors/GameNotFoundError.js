"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_1 = require("./HttpError");
class GameNotFoundError extends HttpError_1.HttpError {
    constructor(id) {
        super(404, `Match with that id ${id} not found.`);
    }
}
exports.GameNotFoundError = GameNotFoundError;
//# sourceMappingURL=GameNotFoundError.js.map