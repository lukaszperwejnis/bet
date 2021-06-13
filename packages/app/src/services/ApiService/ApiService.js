var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import axios from 'axios';
import { getMappedRequestOptions, } from './helpers';
import { CONFIG } from '../../config';
const baseURL = CONFIG.API_URL;
export class ApiService {
    constructor() {
        this.request = axios.create({ baseURL });
    }
    get(url, config) {
        if (!config) {
            return this.request.get(url);
        }
        return this.request.get(url, getMappedRequestOptions(config));
    }
    post(url, config) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!config) {
                return this.request.post(url);
            }
            const { payload } = config, options = __rest(config, ["payload"]);
            const result = yield getMappedRequestOptions(options);
            console.log(result);
            return this.request.post(url, payload, result);
        });
    }
    put(url, config) {
        if (!config) {
            return this.request.put(url);
        }
        const { payload } = config, options = __rest(config, ["payload"]);
        return this.request.put(url, payload, getMappedRequestOptions(options));
    }
    patch(url, config) {
        if (!config) {
            return this.request.patch(url);
        }
        const { payload } = config, options = __rest(config, ["payload"]);
        return this.request.patch(url, payload, getMappedRequestOptions(options));
    }
    delete(url, config) {
        if (!config) {
            return this.request.delete(url);
        }
        const { payload } = config, options = __rest(config, ["payload"]);
        return this.request.delete(url, getMappedRequestOptions(options));
    }
}