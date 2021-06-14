import { HttpError } from "./HttpError";
import {ErrorCodes} from "@bet/structures";

export class UserByEmailNotFoundError extends HttpError {
  constructor(email: string) {
    super(422, `User with that email ${email} not found.`, ["email"], ErrorCodes.UserNotFound);
  }
}
