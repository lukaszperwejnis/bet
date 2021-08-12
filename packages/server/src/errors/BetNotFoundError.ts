import { HttpError } from './HttpError';

export class BetNotFoundError extends HttpError {
  constructor(id: string) {
    super(404, `Bet with that id ${id} not found.`);
  }
}
