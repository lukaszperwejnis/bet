import { HttpError } from "./HttpError";
import {ErrorCodes} from "../structuresToMove/common/ErrorCodes";
import {SchemaValidationError} from "../structuresToMove/common";

export class FieldValidationError extends HttpError {
  constructor(validationErrors: SchemaValidationError[]) {
    super(400, "Fields validation failed", validationErrors, ErrorCodes.ValidationError);
  }
}
