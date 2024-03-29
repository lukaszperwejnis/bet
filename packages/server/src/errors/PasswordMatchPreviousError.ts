import { ErrorCodes } from '@bet/structures';
import { HttpError } from './HttpError';

export class PasswordMatchPreviousError extends HttpError {
  constructor() {
    super(
      422,
      'Password is the same like previous.',
      ['password'],
      ErrorCodes.PasswordIsEqualAsCurrent,
    );
  }
}
