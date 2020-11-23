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
const Controller_1 = require("./Controller");
const TokenService_1 = require("../services/TokenService");
class VerifyController extends Controller_1.Controller {
    constructor() {
        super();
        this.tokenService = new TokenService_1.TokenService();
        this.verifyMailInvitationToken = this.verifyMailInvitationToken.bind(this);
        this.verifyAccessToken = this.verifyAccessToken.bind(this);
        this.refreshAccessTokenByRefreshToken = this.refreshAccessTokenByRefreshToken.bind(this);
        this.verifyResetPasswordToken = this.verifyResetPasswordToken.bind(this);
    }
    verifyMailInvitationToken(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.params.token, 'TOKENNO');
                console.log(req.params.token, 'TOKENNO');
                console.log(req.params.token, 'TOKENNO');
                console.log(req.params.token, 'TOKENNO');
                const payload = yield this.tokenService.verifyMailInvitationToken(req.params.token);
                return this.ok(res, payload);
            }
            catch (error) {
                next(error);
            }
        });
    }
    verifyAccessToken(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = yield this.tokenService.verifyAccessToken(req.params.token);
                return this.ok(res, payload);
            }
            catch (error) {
                next(error);
            }
        });
    }
    refreshAccessTokenByRefreshToken(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = yield this.tokenService.refreshAccessTokenByRefreshToken(req.params.token);
                return this.ok(res, payload);
            }
            catch (error) {
                next(error);
            }
        });
    }
    verifyResetPasswordToken(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = yield this.tokenService.verifyResetPasswordToken(req.params.token);
                return this.ok(res, payload);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.VerifyController = VerifyController;
//# sourceMappingURL=VerifyController.js.map