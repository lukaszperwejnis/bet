var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ApiService } from './ApiService/ApiService';
import { URLS } from '../urls';
class PasswordService extends ApiService {
    constructor() {
        super(...arguments);
        this.startReset = (payload) => __awaiter(this, void 0, void 0, function* () {
            return this.post(URLS.USER.START_RESET_PASSWORD, {
                payload,
            });
        });
        this.reset = (data) => __awaiter(this, void 0, void 0, function* () { return this.post(URLS.USER.RESET_PASSWORD, { payload: Object.assign({}, data) }); });
    }
}
export const passwordService = new PasswordService();
