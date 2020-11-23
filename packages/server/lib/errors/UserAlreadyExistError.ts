import {HttpError} from "./HttpError";

export class UserAlreadyExistError extends HttpError {
    constructor(email: string) {
        super(409, `User with that email ${email} already exist.`);
    }
}
