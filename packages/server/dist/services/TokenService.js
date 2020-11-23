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
const MissingTokenError_1 = require("../errors/MissingTokenError");
const jwt = require("jsonwebtoken");
const config_1 = require("../config");
const errors_1 = require("../errors");
class TokenService {
    verifyToken(token) {
        if (!token) {
            throw new MissingTokenError_1.MissingTokenError();
        }
        return new Promise((resolve, reject) => {
            jwt.verify(token, config_1.default.secrets.jwt, (err, payload) => {
                if (err) {
                    return reject(err);
                }
                resolve(payload);
            });
        });
    }
    verifySigninToken(token) {
        return this.verifyToken(token);
    }
    verifyAccessToken(token) {
        return this.verifyToken(token);
    }
    refreshAccessTokenByRefreshToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = yield this.verifyToken(token);
            if (!payload) {
                new errors_1.TokenExpiredError();
            }
            return {
                accessToken: this.createRefreshToken(payload._id),
                refreshToken: token,
            };
        });
    }
    verifyMailInvitationToken(token) {
        return this.verifyToken(token);
    }
    verifyResetPasswordToken(token) {
        return this.verifyToken(token);
    }
    createAccessToken(userId) {
        const dataStoredInToken = {
            _id: userId,
        };
        const expiresIn = config_1.default.secrets.jwtAccessExp;
        return jwt.sign(dataStoredInToken, config_1.default.secrets.jwt, { expiresIn });
    }
    createRefreshToken(userId) {
        const dataStoredInToken = {
            _id: userId,
        };
        const expiresIn = config_1.default.secrets.jwtRefreshExp;
        return jwt.sign(dataStoredInToken, config_1.default.secrets.jwt, { expiresIn });
    }
    createInvitationToken(email) {
        const dataStoredInToken = { email };
        const expiresIn = config_1.default.secrets.jwtInvitationExp;
        return jwt.sign(dataStoredInToken, config_1.default.secrets.jwt, { expiresIn });
    }
    createResetPasswordToken(email) {
        const dataStoredInToken = { email };
        const expiresIn = config_1.default.secrets.jwtResetExp;
        return jwt.sign(dataStoredInToken, config_1.default.secrets.jwt, { expiresIn });
    }
}
exports.TokenService = TokenService;
//# sourceMappingURL=TokenService.js.map