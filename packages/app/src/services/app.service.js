import { StorageKeys } from '@constants';
import { tokenService } from './token.service';
import { URLS } from '../urls';
import { localStorageService } from './localStorage.service';
import { ApiService } from './ApiService/ApiService';
import { AuthProvider } from '../providers/AuthProvider';
class AppService extends ApiService {
    constructor() {
        super(...arguments);
        this.setUser = (user) => {
            localStorageService.set(StorageKeys.User, user);
        };
        this.getUser = () => localStorageService.get(StorageKeys.User);
        this.validateInvitationToken = (token) => this.get(URLS.TOKENS.MAIL_INVITATION + token);
        this.logout = () => {
            tokenService.clearTokens();
            localStorageService.remove(StorageKeys.User);
            AuthProvider.getInstance().notify();
        };
        this.isLoggedIn = () => {
            return [
                StorageKeys.AccessToken,
                StorageKeys.RefreshToken,
                StorageKeys.User,
            ].every((storageKey) => Boolean(localStorageService.get(storageKey)));
        };
    }
}
export const userService = new AppService();
