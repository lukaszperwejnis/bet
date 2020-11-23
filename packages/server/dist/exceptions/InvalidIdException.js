"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("./HttpException");
class InvalidIdException extends HttpException_1.HttpException {
    constructor() {
        super(404, 'Invalid id');
    }
}
exports.InvalidIdException = InvalidIdException;
//# sourceMappingURL=InvalidIdException.js.map