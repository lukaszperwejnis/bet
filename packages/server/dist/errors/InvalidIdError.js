"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_1 = require("./HttpError");
class InvalidIdError extends HttpError_1.HttpError {
    constructor(id) {
        super(404, `Id ${id} is invalid`);
    }
}
exports.InvalidIdError = InvalidIdError;
//# sourceMappingURL=InvalidIdError.js.map