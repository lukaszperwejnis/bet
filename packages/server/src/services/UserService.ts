import {Password, Signin, User, Signup} from "@bet/structures";
import * as bcrypt from "bcrypt";
import { mapSchemaValidationErrors } from "../helpers/mapSchemaValidationErrors";
import * as Joi from "@hapi/joi";
import { VALIDATION_SCHEMA_KEYS } from "../constants/validationSchemaKeys";
import { UserRepository } from "../Repository/UserRepository";
import { UserNotFoundError } from "../errors/UserNotFoundError";
import { PasswordMatchPreviousError } from "../errors/PasswordMatchPreviousError";
import { TokenService } from "./TokenService";
import {
  FieldValidationError,
  UnauthorizedError,
  UserAlreadyExistError,
  UserByEmailNotFoundError,
} from "../errors";

export class UserService {
  private userRepository = new UserRepository();
  private tokenService = new TokenService();

  async mailInvitationSignup(input: Signup.Payload): Promise<Signup.Success> {
    const schema = Joi.object({
      token: Joi.string().required(),
      password: VALIDATION_SCHEMA_KEYS.PASSWORD,
    });

    const { error } = schema.validate(input);
    if (error) {
      throw new FieldValidationError(mapSchemaValidationErrors(error.details));
    }

    const tokenPayload: any = await this.tokenService.verifyMailInvitationToken(
      input.token
    );

    console.log({tokenPayload});

    const isUserAlreadyExists = await this.userRepository.findOne({
      email: tokenPayload.email,
    });

    if (isUserAlreadyExists) {
      throw new UserAlreadyExistError(tokenPayload.email);
    }

    const result = await this.userRepository.createOne({
      ...input,
      email: tokenPayload.email,
    });

    return Boolean(result);
  }

  async signin(input: Signin.Payload): Promise<Signin.Success> {
    const schema = Joi.object({
      email: VALIDATION_SCHEMA_KEYS.EMAIL,
      password: Joi.string().required(),
    });

    const { error } = schema.validate(input);
    if (error) {
      throw new FieldValidationError(mapSchemaValidationErrors(error.details));
    }

    const doc = await this.userRepository.findOne(
      { email: input.email },
      true
    );

    if (!doc) {
      throw new UnauthorizedError();
    }

    const { password, ...user } = doc;

    const match = await this.checkPassword(password, input.password);
    if (!match) {
      throw new UnauthorizedError();
    }

    return {
      accessToken: this.tokenService.createAccessToken(user._id),
      refreshToken: this.tokenService.createRefreshToken(user._id),
      user,
    };
  }

  async updatePassword(input: any): Promise<Boolean> {
    const schema = Joi.object({
      password: VALIDATION_SCHEMA_KEYS.PASSWORD,
    });

    const { error } = schema.validate(input);
    if (error) {
      throw new FieldValidationError(mapSchemaValidationErrors(error.details));
    }

    const { userId, password } = input;
    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new UserNotFoundError(userId);
    }

    const match = await this.checkPassword(user.password, password);

    if (match) {
      throw new PasswordMatchPreviousError();
    }

    const result = await this.userRepository.findOneAndUpdate(
      { _id: userId },
      password
    );

    return Boolean(result);
  }

  async resetPassword(input: Password.ResetPayload): Promise<Password.ResetSuccess> {
    const schema = Joi.object({
      token: Joi.string().required(),
      password: VALIDATION_SCHEMA_KEYS.PASSWORD,
    });

    const { error } = schema.validate(input);
    if (error) {
      throw new FieldValidationError(mapSchemaValidationErrors(error.details));
    }

    const tokenPayload: any = await this.tokenService.verifyResetPasswordToken(
      input.token
    );

    const user = await this.userRepository.findOne({
      email: tokenPayload.email,
    });

    if (!user) {
      throw new UserByEmailNotFoundError(tokenPayload.email);
    }

    const match = await this.checkPassword(user.password, input.password);

    if (match) {
      throw new PasswordMatchPreviousError();
    }

    const result = await this.userRepository.findOneAndUpdate(
      { email: tokenPayload.email },
      {
        password: await UserService.hashPassword(input.password),
      }
    );

    return Boolean(result);
  }

  async getOneById(id: string): Promise<User.User> {
    return await this.userRepository.findById(id);
  }

  checkPassword(passwordHash: string, password: string) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, passwordHash, (err, same) => {
        if (err) {
          return reject(err);
        }

        resolve(same);
      });
    });
  }

  private static hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }
}
