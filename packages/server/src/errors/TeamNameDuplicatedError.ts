import { HttpError } from './HttpError';

export class TeamNameDuplicatedError extends HttpError {
  constructor(name: string) {
    super(409, `Team with name ${name} already exist.`);
  }
}
