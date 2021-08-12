'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.InvalidIconError = void 0;
const CustomError_1 = require('./CustomError');
const errorsCodes_1 = require('./errorsCodes');
class InvalidIconError extends CustomError_1.CustomError {
  constructor(icon) {
    super(icon, errorsCodes_1.ErrorCodes.NOT_FOUND);
  }
}
exports.InvalidIconError = InvalidIconError;
