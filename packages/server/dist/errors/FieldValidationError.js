"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError_1 = require("./HttpError");
class FieldValidationError extends HttpError_1.HttpError {
    constructor(validationErrors) {
        super(400, 'Fields validation failed', validationErrors);
    }
}
exports.FieldValidationError = FieldValidationError;
//# sourceMappingURL=FieldValidationError.js.map