import nodemailer from 'nodemailer';
import nodeMailerMailgun from 'nodemailer-mailgun-transport';
import * as Joi from '@hapi/joi';
import { Password, Signup } from '@bet/structures';
import config from '../config';
import {
  FieldValidationError,
  UserAlreadyExistError,
  UserByEmailNotFoundError,
} from '../errors';
import { mapSchemaValidationErrors } from '../helpers/mapSchemaValidationErrors';
import { VALIDATION_SCHEMA_KEYS } from '../constants/validationSchemaKeys';
import { TokenService } from './TokenService';
import { UserRepository } from '../Repository/UserRepository';

const auth = {
  auth: {
    api_key: config.mailgun.API_KEY,
    domain: config.mailgun.domain,
  },
};

const nodemailerMailgun = nodemailer.createTransport(nodeMailerMailgun(auth));

export class MailService {
  private userRepository = new UserRepository();
  private tokenService = new TokenService();

  private static validateMail(input: any) {
    const schema = Joi.object({
      email: VALIDATION_SCHEMA_KEYS.EMAIL,
    });

    const { error } = schema.validate(input);

    if (error) {
      throw new FieldValidationError(mapSchemaValidationErrors(error.details));
    }
  }

  async sendInvitationEmail(
    input: Signup.InvitationPayload,
  ): Promise<Signup.InvitationSuccess> {
    MailService.validateMail(input);
    const user = await this.userRepository.findOne({ email: input.email });

    if (user) {
      throw new UserAlreadyExistError(input.email);
    }

    const token = this.tokenService.createInvitationToken(input.email);
    const result = await MailService.sendMail({
      from: 'bet@bet',
      to: input.email,
      subject: 'Bet - rejestracja',
      html: `Klikaj i obstawiaj Sportowy Świrze! Otwórz w <a href="${config.clientURL}/mail-invitation-signup?token=${token}&email=${input.email}">przeglądarce</a> lub <a href="http://127.0.0.1:3010/redirect?url=betmobileapp://signup/${token}/${input.email}">na urządzeniu mobilnym</a>`,
    });

    return Boolean(result);
  }

  async sendResetPasswordEmail({
    email,
  }: Password.StartResetPayload): Promise<Password.StartResetSuccess> {
    MailService.validateMail({ email });
    const user = await this.userRepository.findOne({ email });

    if (!user) {
      throw new UserByEmailNotFoundError(email);
    }

    const token = this.tokenService.createResetPasswordToken(email);
    const result = await MailService.sendMail({
      from: 'bet@bet',
      to: email,
      subject: 'Bet - reset hasła',
      html: `Klikaj i ustawiaj nowe hasło by obstawiać dalej! Otwórz w <a href="${config.clientURL}/set-password?token=${token}">przeglądarce</a> lub <a href="http://127.0.0.1:3010/redirect?url=betmobileapp://reset-password/${token}">na urządzeniu mobilnym</a>`,
    });

    return Boolean(result);
  }

  private static async sendMail(mailDetails: nodemailer.SendMailOptions) {
    return nodemailerMailgun.sendMail(mailDetails);
  }
}
