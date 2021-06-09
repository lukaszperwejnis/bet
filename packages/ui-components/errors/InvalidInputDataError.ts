import { CustomError } from "./CustomError";

export class InvalidInputDataError extends CustomError {
  constructor(reference: string, code?: string) {
    super(reference, code);
  }
}
