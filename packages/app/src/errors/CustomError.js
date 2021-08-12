'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.CustomError = void 0;
class CustomError extends Error {
  constructor(reference, code) {
    super(reference);
    this.reference = reference;
    this.code = code;
  }
}
exports.CustomError = CustomError;
