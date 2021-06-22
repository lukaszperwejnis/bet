"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const _constants_1 = require("@constants");
const token_service_1 = require("./token.service");
const urls_1 = require("../urls");
const localStorage_service_1 = require("./localStorage.service");
const ApiService_1 = require("./ApiService/ApiService");
const AuthProvider_1 = require("../providers/AuthProvider");
class AppService extends ApiService_1.ApiService {
    constructor() {
        super(...arguments);
        this.setUser = (user) => {
            localStorage_service_1.localStorageService.set(_constants_1.StorageKeys.User, user);
        };
        this.getUser = () => localStorage_service_1.localStorageService.get(_constants_1.StorageKeys.User);
        this.validateInvitationToken = (token) => this.get(urls_1.URLS.TOKENS.MAIL_INVITATION + token);
        this.logout = () => {
            token_service_1.tokenService.clearTokens();
            localStorage_service_1.localStorageService.remove(_constants_1.StorageKeys.User);
            AuthProvider_1.AuthProvider.getInstance().notify();
        };
        this.isLoggedIn = () => {
            return [
                _constants_1.StorageKeys.AccessToken,
                _constants_1.StorageKeys.RefreshToken,
                _constants_1.StorageKeys.User,
            ].every((storageKey) => Boolean(localStorage_service_1.localStorageService.get(storageKey)));
        };
    }
}
exports.userService = new AppService();
