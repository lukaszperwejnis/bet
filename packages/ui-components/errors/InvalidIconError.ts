import { CustomError } from "./CustomError";
import { ErrorCodes } from "./errorsCodes";

export class InvalidIconError extends CustomError {
  constructor(icon: string) {
    super(icon, ErrorCodes.NotFound);
  }
}
