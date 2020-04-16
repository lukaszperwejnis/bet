import {HttpError} from "./HttpError";

export class BetLateError extends HttpError {
    constructor(id: string) {
        super(400, `Bet with id ${id} is too late`);
    }
}
