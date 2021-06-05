import { CustomError } from './CustomError';
import { ErrorCodes } from './errorsCodes';
export class InvalidIconError extends CustomError {
    constructor(icon) {
        super(icon, ErrorCodes.NOT_FOUND);
    }
}
