export class HttpError extends Error {
  status: number;
  message: string;
  errors: any[];
  code?: number;

  constructor(status: number, message: string, errors?: any, code?: number) {
    super(message);
    this.status = status;
    this.message = message;
    this.errors = errors;
    this.code = code;
  }
}
