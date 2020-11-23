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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
const mapSchemaValidationErrors_1 = require("../helpers/mapSchemaValidationErrors");
const Joi = require("@hapi/joi");
const validationSchemaKeys_1 = require("../constants/validationSchemaKeys");
const UserRepository_1 = require("../Repository/UserRepository");
const UserNotFoundError_1 = require("../errors/UserNotFoundError");
const PasswordMatchPreviousError_1 = require("../errors/PasswordMatchPreviousError");
const TokenService_1 = require("./TokenService");
const bcrypt = require("bcrypt");
class UserService {
    constructor() {
        this.userRepository = new UserRepository_1.UserRepository();
        this.tokenService = new TokenService_1.TokenService();
    }
    mailInvitationSignup(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = Joi.object({
                token: Joi.string().required(),
                password: validationSchemaKeys_1.VALIDATION_SCHEMA_KEYS.PASSWORD,
            });
            const { error } = schema.validate(input);
            if (error) {
                throw new errors_1.FieldValidationError(mapSchemaValidationErrors_1.mapSchemaValidationErrors(error.details));
            }
            const tokenPayload = yield this.tokenService.verifyMailInvitationToken(input.token);
            const registeredEmail = yield this.userRepository.findOne({ email: tokenPayload.email });
            if (registeredEmail) {
                throw new errors_1.UserAlreadyExistError(tokenPayload.email);
            }
            const _a = yield this.userRepository.createOne(Object.assign(Object.assign({}, input), { email: tokenPayload.email })), { password } = _a, user = __rest(_a, ["password"]);
            return {
                accessToken: this.tokenService.createAccessToken(user._id),
                refreshToken: this.tokenService.createRefreshToken(user._id)
            };
        });
    }
    signin(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = Joi.object({
                email: validationSchemaKeys_1.VALIDATION_SCHEMA_KEYS.EMAIL,
                password: Joi.string().required(),
            });
            const { error } = schema.validate(input);
            if (error) {
                throw new errors_1.FieldValidationError(mapSchemaValidationErrors_1.mapSchemaValidationErrors(error.details));
            }
            const user = yield this.userRepository.findOne({ email: input.email });
            if (!user) {
                throw new errors_1.UnauthorizedError();
            }
            console.log({ user });
            const match = yield this.checkPassword(user.password, input.password);
            if (!match) {
                throw new errors_1.UnauthorizedError();
            }
            console.log(user);
            return {
                accessToken: this.tokenService.createAccessToken(user._id),
                refreshToken: this.tokenService.createRefreshToken(user._id)
            };
        });
    }
    updatePassword(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = Joi.object({
                password: validationSchemaKeys_1.VALIDATION_SCHEMA_KEYS.PASSWORD,
            });
            const { error } = schema.validate(input);
            if (error) {
                throw new errors_1.FieldValidationError(mapSchemaValidationErrors_1.mapSchemaValidationErrors(error.details));
            }
            const { userId, password } = input;
            const user = yield this.userRepository.findById(userId);
            if (!user) {
                throw new UserNotFoundError_1.UserNotFoundError(userId);
            }
            const match = yield this.checkPassword(user.password, password);
            if (match) {
                throw new PasswordMatchPreviousError_1.PasswordMatchPreviousError();
            }
            return yield this.userRepository.findOneAndUpdate({ _id: userId }, password);
        });
    }
    resetPassword(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const schema = Joi.object({
                token: Joi.string().required(),
                password: validationSchemaKeys_1.VALIDATION_SCHEMA_KEYS.PASSWORD,
            });
            const { error } = schema.validate(input);
            if (error) {
                throw new errors_1.FieldValidationError(mapSchemaValidationErrors_1.mapSchemaValidationErrors(error.details));
            }
            const tokenPayload = yield this.tokenService.verifyMailInvitationToken(input.token);
            const user = yield this.userRepository.findOne({ email: tokenPayload.email });
            if (!user) {
                throw new errors_1.UserByEmailNotFoundError(tokenPayload.email);
            }
            const match = yield this.checkPassword(user.password, input.password);
            if (match) {
                throw new PasswordMatchPreviousError_1.PasswordMatchPreviousError();
            }
            return yield this.userRepository.findOneAndUpdate({ email: tokenPayload.email }, {
                password: yield UserService.hashPassword(input.password)
            });
        });
    }
    getOneById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.findById(id);
        });
    }
    checkPassword(passwordHash, password) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, passwordHash, (err, same) => {
                if (err) {
                    return reject(err);
                }
                resolve(same);
            });
        });
    }
    static hashPassword(password) {
        return bcrypt.hash(password, 10);
    }
}
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map