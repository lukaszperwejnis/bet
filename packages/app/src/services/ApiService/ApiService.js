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
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.ApiService = void 0;
const axios_1 = __importDefault(require('axios'));
const helpers_1 = require('./helpers');
const config_1 = require('../../config');
const baseURL = config_1.CONFIG.API_URL;
class ApiService {
  constructor() {
    this.request = axios_1.default.create({ baseURL });
  }
  get(url, config) {
    if (!config) {
      return this.request.get(url);
    }
    return this.request.get(url, helpers_1.getMappedRequestOptions(config));
  }
  post(url, config) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!config) {
        return this.request.post(url);
      }
      const { payload } = config,
        options = __rest(config, ['payload']);
      const result = yield helpers_1.getMappedRequestOptions(options);
      console.log(result);
      return this.request.post(url, payload, result);
    });
  }
  put(url, config) {
    if (!config) {
      return this.request.put(url);
    }
    const { payload } = config,
      options = __rest(config, ['payload']);
    return this.request.put(
      url,
      payload,
      helpers_1.getMappedRequestOptions(options),
    );
  }
  patch(url, config) {
    if (!config) {
      return this.request.patch(url);
    }
    const { payload } = config,
      options = __rest(config, ['payload']);
    return this.request.patch(
      url,
      payload,
      helpers_1.getMappedRequestOptions(options),
    );
  }
  delete(url, config) {
    if (!config) {
      return this.request.delete(url);
    }
    const { payload } = config,
      options = __rest(config, ['payload']);
    return this.request.delete(url, helpers_1.getMappedRequestOptions(options));
  }
}
exports.ApiService = ApiService;
