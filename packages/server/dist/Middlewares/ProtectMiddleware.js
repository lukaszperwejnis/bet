"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
const UserService_1 = require("../services/UserService");
const TokenService_1 = require("../services/TokenService");
class ProtectMiddleware {
    constructor() {
        this.tokenService = new TokenService_1.TokenService();
        this.userService = new UserService_1.UserService();
        this.protect = this.protect.bind(this);
    }
    protect(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.headers.authorization) {
                next(new errors_1.UnauthorizedError());
            }
            const token = req.headers.authorization.split('Bearer ')[1];
            if (!token) {
                next(new errors_1.UnauthorizedError());
            }
            try {
                const payload = yield this.tokenService.verifySigninToken(token);
                const user = yield this.userService.getOneById(payload._id);
                if (!user) {
                    next(new errors_1.UnauthorizedError());
                }
                req.user = user;
                next();
            }
            catch (e) {
                next(new errors_1.UnauthorizedError());
            }
        });
    }
}
exports.ProtectMiddleware = ProtectMiddleware;
//# sourceMappingURL=ProtectMiddleware.js.map