"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("./HttpException");
class UnauthorizedException extends HttpException_1.HttpException {
    constructor() {
        super(401, 'Unauthorized');
    }
}
exports.UnauthorizedException = UnauthorizedException;
//# sourceMappingURL=UnauthorizedException.js.map