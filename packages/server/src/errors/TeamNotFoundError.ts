import { HttpError } from './HttpError';

export class TeamNotFoundError extends HttpError {
  constructor(id: string) {
    super(404, `Team with id ${id} not found`);
  }
}
