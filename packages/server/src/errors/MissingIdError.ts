import { HttpError } from "./HttpError";

export class MissingIdError extends HttpError {
  constructor() {
    super(404, "Missing id");
  }
}
