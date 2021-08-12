export class HttpError extends Error {
  status: number;
  message: string;
  errors: unknown[] | undefined;
  code?: number;

  constructor(
    status: number,
    message: string,
    errors?: unknown[],
    code?: number,
  ) {
    super(message);
    this.status = status;
    this.message = message;
    this.errors = errors;
    this.code = code;
  }
}
