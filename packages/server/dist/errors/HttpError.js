"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpError extends Error {
    constructor(status, message, errors) {
        super(message);
        this.status = status;
        this.message = message;
        this.errors = errors;
    }
}
exports.HttpError = HttpError;
//# sourceMappingURL=HttpError.js.map