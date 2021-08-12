import nodemailer from "nodemailer";
import nodeMailerMailgun from "nodemailer-mailgun-transport";
import * as Joi from "@hapi/joi";
import config from "../config";
import {
  FieldValidationError,
  UserAlreadyExistError,
  UserByEmailNotFoundError,
} from "../errors";
import { mapSchemaValidationErrors } from "../helpers/mapSchemaValidationErrors";
import { VALIDATION_SCHEMA_KEYS } from "../constants/validationSchemaKeys";
import { TokenService } from "./TokenService";
import { UserRepository } from "../Repository/UserRepository";
import { Password, Signup } from "@bet/structures";

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

  async sendInvitationEmail(input: Signup.InvitationPayload): Promise<Signup.InvitationSuccess> {
    MailService.validateMail(input);
    const user = await this.userRepository.findOne({ email: input.email });

    if (user) {
      throw new UserAlreadyExistError(input.email);
    }

    const token = this.tokenService.createInvitationToken(input.email);
    const result = await MailService.sendMail({
      from: "bet@bet",
      to: input.email,
      subject: "Bet - rejestracja",
      text: `Klikaj i obstawiaj Sportowy Świrze! ${config.clientURL}/mail-invitation-signup?token=${token}&email=${input.email}`,
    });

    return Boolean(result);
  }

  async sendResetPasswordEmail({email}: Password.StartResetPayload): Promise<Password.StartResetSuccess> {
    MailService.validateMail({email});
§
    const user = await this.userRepository.findOne({ email });

    if (!user) {
      throw new UserByEmailNotFoundError(email);
    }

    const token = this.tokenService.createResetPasswordToken(email);
    const result = await MailService.sendMail({
      from: "bet@bet",
      to: email,
      subject: "Bet - reset hasła",
      text: `Klikaj i ustawiaj nowe hasło by obstawiać dalej! ${config.clientURL}/set-password?token=${token}`,
    });

    return Boolean(result);
  }

  private static async sendMail(mailDetails: nodemailer.SendMailOptions) {
    return nodemailerMailgun.sendMail(mailDetails);
  }
}
