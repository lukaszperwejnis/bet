import { HttpError } from "./HttpError";
import {ErrorCodes} from "@bet/structures";

export class UserAlreadyExistError extends HttpError {
  constructor(email: string) {
    super(409, `User with that email ${email} already exist.`, ['email'], ErrorCodes.UserWithGivenEmailAlreadyExists);
  }
}
