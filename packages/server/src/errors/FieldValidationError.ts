import { ErrorCodes, SchemaValidationError } from '@bet/structures';
import { HttpError } from './HttpError';

export class FieldValidationError extends HttpError {
  constructor(validationErrors: SchemaValidationError[]) {
    super(
      400,
      'Fields validation failed',
      validationErrors,
      ErrorCodes.ValidationError,
    );
  }
}
