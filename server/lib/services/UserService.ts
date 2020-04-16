import {FieldValidationError, UnauthorizedError, UserAlreadyExistError, UserByEmailNotFoundError} from "../errors";
import {mapSchemaValidationErrors} from "../helpers/mapSchemaValidationErrors";
import {User} from "../structures/User";
import * as Joi from "@hapi/joi";
import {VALIDATION_SCHEMA_KEYS} from "../constants/validationSchemaKeys";
import {UserRepository} from "../Repository/UserRepository";
import {UserNotFoundError} from "../errors/UserNotFoundError";
import {PasswordMatchPreviousError} from "../errors/PasswordMatchPreviousError";
import {TokenService} from "./TokenService";
import * as bcrypt from "bcrypt";
import {LoggedUser} from "../interfaces/LoggedUser";

export class UserService {
    private userRepository = new UserRepository();
    private tokenService = new TokenService();

    public async mailInvitationSignup(input: any): Promise<LoggedUser> {
        const schema = Joi.object({
            token: Joi.string().required(),
            password: VALIDATION_SCHEMA_KEYS.PASSWORD,
        });

        const {error} = schema.validate(input);
        if (error) {
            throw new FieldValidationError(mapSchemaValidationErrors(error.details));
        }

        const tokenPayload: any = await this.tokenService.verifyMailInvitationToken(input.token);

        const registeredEmail = await this.userRepository.findOne({email: tokenPayload.email});
        if (registeredEmail) {
            throw new UserAlreadyExistError(tokenPayload.email);
        }

        const {password, ...user} = await this.userRepository.createOne({
            ...input,
            email: tokenPayload.email
        });
        return {
            accessToken: this.tokenService.createAccessToken(user._id),
            refreshToken: this.tokenService.createRefreshToken(user._id)
        };
    }

    public async signin(input: any): Promise<LoggedUser> {
        const schema = Joi.object({
            email: VALIDATION_SCHEMA_KEYS.EMAIL,
            password: Joi.string().required(),
        });

        const {error} = schema.validate(input);
        if (error) {
            throw new FieldValidationError(mapSchemaValidationErrors(error.details));
        }

        const user: User = await this.userRepository.findOne({email: input.email});

        if (!user) {
            throw new UnauthorizedError();
        }

        console.log({user});

        const match = await this.checkPassword(user.password, input.password);
        if (!match) {
            throw new UnauthorizedError();
        }

        console.log(user);

        return {
            accessToken: this.tokenService.createAccessToken(user._id),
            refreshToken: this.tokenService.createRefreshToken(user._id)
        };
    }

    public async updatePassword(input: any): Promise<User> {
        const schema = Joi.object({
            password: VALIDATION_SCHEMA_KEYS.PASSWORD,
        });

        const {error} = schema.validate(input);
        if (error) {
            throw new FieldValidationError(mapSchemaValidationErrors(error.details));
        }

        const {userId, password} = input;
        const user = await this.userRepository.findById(userId);
        if (!user) {
            throw new UserNotFoundError(userId);
        }

        const match = await this.checkPassword(user.password, password);

        if (match) {
            throw new PasswordMatchPreviousError();
        }

        return await this.userRepository.findOneAndUpdate({_id: userId}, password);
    }

    public async resetPassword(input: any): Promise<User> {
        const schema = Joi.object({
            token: Joi.string().required(),
            password: VALIDATION_SCHEMA_KEYS.PASSWORD,
        });

        const {error} = schema.validate(input);
        if (error) {
            throw new FieldValidationError(mapSchemaValidationErrors(error.details));
        }

        const tokenPayload: any = await this.tokenService.verifyMailInvitationToken(input.token);

        const user = await this.userRepository.findOne({email: tokenPayload.email});
        if (!user) {
            throw new UserByEmailNotFoundError(tokenPayload.email);
        }

        const match = await this.checkPassword(user.password, input.password);

        if (match) {
            throw new PasswordMatchPreviousError();
        }

        return await this.userRepository.findOneAndUpdate({email: tokenPayload.email}, {
            password: await UserService.hashPassword(input.password)
        });
    }

    public async getOneById(id: string): Promise<User> {
        return await this.userRepository.findById(id);
    }

    private checkPassword(passwordHash: string, password: string) {
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
