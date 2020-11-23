import {HttpError} from "./HttpError";

export class UserByEmailNotFoundError extends HttpError {
    constructor(email: string) {
        super(422, `User with that email ${email} not found.`);
    }
}
