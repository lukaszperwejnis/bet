import {HttpError} from "./HttpError";

export class PasswordMatchPreviousError extends HttpError {
    constructor() {
        super(404, 'Password is the same like previous.');
    }
}
