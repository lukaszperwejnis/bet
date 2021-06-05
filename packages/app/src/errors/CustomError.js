export class CustomError extends Error {
    constructor(reference, code) {
        super(reference);
        this.reference = reference;
        this.code = code;
    }
}
