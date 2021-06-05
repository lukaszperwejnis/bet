import { HttpError } from "./HttpError";
import {ErrorCodes} from "../structuresToMove/common/ErrorCodes";

export class UserAlreadyExistError extends HttpError {
  constructor(email: string) {
    super(409, `User with that email ${email} already exist.`, ['email'], ErrorCodes.UserWithGivenEmailAlreadyExists);
  }
}
