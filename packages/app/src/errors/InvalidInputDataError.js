import { CustomError } from './CustomError';
export class InvalidInputDataError extends CustomError {
    constructor(reference, code) {
        super(reference, code);
    }
}
