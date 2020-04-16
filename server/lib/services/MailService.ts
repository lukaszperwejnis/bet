import * as nodemailer from 'nodemailer';
import * as nodeMailerMailgun from 'nodemailer-mailgun-transport';
import * as Joi from "@hapi/joi";
import config from "../config";
import {FieldValidationError, UserAlreadyExistError, UserByEmailNotFoundError} from "../errors";
import {mapSchemaValidationErrors} from "../helpers/mapSchemaValidationErrors";
import {VALIDATION_SCHEMA_KEYS} from "../constants/validationSchemaKeys";
import {TokenService} from "./TokenService";
import {UserRepository} from "../Repository/UserRepository";

const auth = {
    auth: {
        api_key: config.mailgun.API_KEY,
        domain: config.mailgun.domain
    },
};

const nodemailerMailgun = nodemailer.createTransport(nodeMailerMailgun(auth));

export class MailService {
    private userRepository = new UserRepository();
    private tokenService = new TokenService();

    private static validateMail(input: any) {
        const schema = Joi.object({
            email: VALIDATION_SCHEMA_KEYS.EMAIL
        });

        const {error} =  schema.validate(input);

        if (error) {
            throw new FieldValidationError(mapSchemaValidationErrors(error.details));
        }
    }

    public async sendInvitationEmail(input: any) {
        MailService.validateMail(input);
        const user = await this.userRepository.findOne({email: input.email});

        if (user) {
            throw new UserAlreadyExistError(input.email);
        }

        const token = this.tokenService.createInvitationToken(input.email);
        return await MailService.sendMail({
            from: 'bet@bet',
            to: input.email,
            subject: 'Bet - rejestracja',
            text: `Klikaj i obstawiaj Sportowy Świrze! http://127.0.0.1:3000/mail-invitation-signup/${token}`,
        });
    }

    public async sendResetPasswordEmail(input: any) {
        MailService.validateMail(input);

        const user = await this.userRepository.findOne({email: input.email});

        if (!user) {
            throw new UserByEmailNotFoundError(input.email);
        }

        const token = this.tokenService.createResetPasswordToken(input.email);
        return await MailService.sendMail({
            from: 'bet@bet',
            to: input.email,
            subject: 'Bet - reset hasła',
            text: `Klikaj i ustawiaj nowe hasło by obstawiać dalej! http://127.0.0.1:3000/reset-password/${token}`,
        });
    }

    private static async sendMail(mailDetails: object) {
        return nodemailerMailgun.sendMail(mailDetails);
    }
}
