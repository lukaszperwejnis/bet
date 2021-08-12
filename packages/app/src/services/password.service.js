'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.passwordService = void 0;
const ApiService_1 = require('./ApiService/ApiService');
const urls_1 = require('../urls');
class PasswordService extends ApiService_1.ApiService {
  constructor() {
    super(...arguments);
    this.startReset = (payload) =>
      __awaiter(this, void 0, void 0, function* () {
        return this.post(urls_1.URLS.USER.START_RESET_PASSWORD, {
          payload,
        });
      });
    this.reset = (data) =>
      __awaiter(this, void 0, void 0, function* () {
        return this.post(urls_1.URLS.USER.RESET_PASSWORD, {
          payload: Object.assign({}, data),
        });
      });
  }
}
exports.passwordService = new PasswordService();
