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
const nodemailer = require("nodemailer");
const nodeMailerMailgun = require("nodemailer-mailgun-transport");
const Joi = require("@hapi/joi");
const config_1 = require("../config");
const errors_1 = require("../errors");
const mapSchemaValidationErrors_1 = require("../helpers/mapSchemaValidationErrors");
const validationSchemaKeys_1 = require("../constants/validationSchemaKeys");
const TokenService_1 = require("./TokenService");
const UserRepository_1 = require("../Repository/UserRepository");
const auth = {
    auth: {
        api_key: config_1.default.mailgun.API_KEY,
        domain: config_1.default.mailgun.domain
    },
};
const nodemailerMailgun = nodemailer.createTransport(nodeMailerMailgun(auth));
class MailService {
    constructor() {
        this.userRepository = new UserRepository_1.UserRepository();
        this.tokenService = new TokenService_1.TokenService();
    }
    static validateMail(input) {
        const schema = Joi.object({
            email: validationSchemaKeys_1.VALIDATION_SCHEMA_KEYS.EMAIL
        });
        const { error } = schema.validate(input);
        if (error) {
            throw new errors_1.FieldValidationError(mapSchemaValidationErrors_1.mapSchemaValidationErrors(error.details));
        }
    }
    sendInvitationEmail(input) {
        return __awaiter(this, void 0, void 0, function* () {
            MailService.validateMail(input);
            const user = yield this.userRepository.findOne({ email: input.email });
            if (user) {
                throw new errors_1.UserAlreadyExistError(input.email);
            }
            const token = this.tokenService.createInvitationToken(input.email);
            return yield MailService.sendMail({
                from: 'bet@bet',
                to: input.email,
                subject: 'Bet - rejestracja',
                text: `Klikaj i obstawiaj Sportowy Świrze! http://127.0.0.1:3000/mail-invitation-signup/${token}`,
            });
        });
    }
    sendResetPasswordEmail(input) {
        return __awaiter(this, void 0, void 0, function* () {
            MailService.validateMail(input);
            const user = yield this.userRepository.findOne({ email: input.email });
            if (!user) {
                throw new errors_1.UserByEmailNotFoundError(input.email);
            }
            const token = this.tokenService.createResetPasswordToken(input.email);
            return yield MailService.sendMail({
                from: 'bet@bet',
                to: input.email,
                subject: 'Bet - reset hasła',
                text: `Klikaj i ustawiaj nowe hasło by obstawiać dalej! http://127.0.0.1:3000/reset-password/${token}`,
            });
        });
    }
    static sendMail(mailDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            return nodemailerMailgun.sendMail(mailDetails);
        });
    }
}
exports.MailService = MailService;
//# sourceMappingURL=MailService.js.map