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
exports.betService = exports.BetService = void 0;
const urls_1 = require('../urls');
const ApiService_1 = require('./ApiService/ApiService');
// type AvailableBetsResponse = {
//   status: number;
//   data: {
//     availableGames: unknown;
//     availableChampions: unknown;
//   };
//   message: string;
// };
class BetService extends ApiService_1.ApiService {
  constructor() {
    super(...arguments);
    this.getAvailableBets = () =>
      __awaiter(this, void 0, void 0, function* () {
        return this.get(urls_1.URLS.BET.AVAILABLE, { authRequired: true });
      });
    this.getUserBets = () =>
      __awaiter(this, void 0, void 0, function* () {
        return this.get(urls_1.URLS.BET.USER, { authRequired: true });
      });
    this.createBets = (payload) =>
      __awaiter(this, void 0, void 0, function* () {
        return this.post(urls_1.URLS.BET.CREATE, {
          payload,
          authRequired: true,
        });
      });
  }
}
exports.BetService = BetService;
exports.betService = new BetService();
