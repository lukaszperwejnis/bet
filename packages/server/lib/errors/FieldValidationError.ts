import {SchemaValidationError} from "../interfaces/SchemaValidationError";
import {HttpError} from "./HttpError";

export class FieldValidationError extends HttpError {
    constructor(validationErrors: SchemaValidationError[]) {
        super(400, 'Fields validation failed', validationErrors)
    }
}
