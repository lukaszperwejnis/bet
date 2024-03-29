import { Response, Request } from 'express';
import { HttpError } from '../errors/HttpError';

export function errorMiddleware(
  error: HttpError,
  req: Request,
  response: Response,
): void {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';

  response.status(status).send({
    status,
    message,
    errors: error.errors,
    code: error.code,
  });
}
