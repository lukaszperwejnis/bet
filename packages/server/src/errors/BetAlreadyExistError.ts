import { HttpError } from './HttpError';

export class BetAlreadyExistError extends HttpError {
  constructor(gameId: string) {
    super(409, `Bet for that gameId ${gameId} already exist`);
  }
}
