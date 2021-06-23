import { HttpError } from "./HttpError";
import {ErrorCodes, SchemaValidationError} from "@bet/structures";

export class FieldValidationError extends HttpError {
  constructor(validationErrors: SchemaValidationError[]) {
    super(400, "Fields validation failed", validationErrors, ErrorCodes.ValidationError);
  }
}
