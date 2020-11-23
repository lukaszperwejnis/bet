"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("./HttpException");
class MissingIdException extends HttpException_1.HttpException {
    constructor() {
        super(404, 'Missing id');
    }
}
exports.MissingIdException = MissingIdException;
//# sourceMappingURL=MissingIdException.js.map