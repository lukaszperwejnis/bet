export class CustomError extends Error {
  reference: string;
  code: string;

  constructor(reference: string, code: string) {
    super(reference);
    this.reference = reference;
    this.code = code;
  }
}
