import {HttpError} from "./HttpError";

export class GameNotFoundError extends HttpError {
    constructor(id: string) {
        super(404, `Match with that id ${id} not found.`);
    }
}
