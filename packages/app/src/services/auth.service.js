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
class AuthService extends ApiService {
    constructor() {
        super(...arguments);
        this.login = (payload) => __awaiter(this, void 0, void 0, function* () { return this.post(URLS.USER.SIGNIN, { payload }); });
        this.signup = (payload) => __awaiter(this, void 0, void 0, function* () { return this.post(URLS.USER.SIGNUP, { payload }); });
        // startResetPassword = async <T>(email: string): Promise<T> =>
        //   this.post(URLS.USER.START_RESET_PASSWORD, {
        //     payload: {
        //       email,
        //     },
        //   });
        //
        // resetPassword = async <T>(data: {
        //   token: string;
        //   password: string;
        // }): Promise<T> =>
        //   this.post(URLS.USER.RESET_PASSWORD, { payload: { ...data } });
        this.validateInvitationToken = (token) => __awaiter(this, void 0, void 0, function* () { return this.get(URLS.TOKENS.MAIL_INVITATION + token); });
    }
}
export const authService = new AuthService();
