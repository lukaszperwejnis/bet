import { HttpError } from './HttpError';

export class MissingTokenError extends HttpError {
  constructor() {
    super(404, 'Missing token');
  }
}
