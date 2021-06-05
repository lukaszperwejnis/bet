import { HttpError } from "./HttpError";
import {ErrorCodes} from "../structuresToMove/common/ErrorCodes";

export class PasswordMatchPreviousError extends HttpError {
  constructor() {
    super(422, "Password is the same like previous.",["password"], ErrorCodes.PasswordIsEqualAsCurrent);
  }
}
