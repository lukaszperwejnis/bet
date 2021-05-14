import { HttpError } from "./HttpError";

export class InvalidIdError extends HttpError {
  constructor(id: string) {
    super(404, `Id ${id} is invalid`);
  }
}
