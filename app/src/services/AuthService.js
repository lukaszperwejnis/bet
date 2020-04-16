import {APIService} from "./APIService";
import {TokenService} from "./TokenService";

export class AuthService {
    constructor() {
        this.apiService = new APIService();
        this.tokenService = new TokenService();
    }

    onLogin({accessToken, refreshToken}) {
        this.tokenService.setAccessToken(accessToken);
        this.tokenService.setRefreshToken(refreshToken);
    }

    onLogout() {
        this.tokenService.clearTokens();
    }

    async isLoggedIn() {
        if (!this.tokenService.getAccessToken()) {
            return false;
        }

        const accessTokenValidationResult = await this._validateAccessToken();
        console.log({accessTokenValidationResult});
        if (accessTokenValidationResult && accessTokenValidationResult.status === 500) {
            const refreshTokenValidationResult = await this._validateRefreshToken();
            if (refreshTokenValidationResult.data) {
                const {accessToken, refreshToken} = refreshTokenValidationResult.data;
                this.tokenService.setAccessToken(accessToken);
                this.tokenService.setRefreshToken(refreshToken);
                return true;
            } else {
                return false;
            }
        }

        return true;
    }

    _validateAccessToken() {
        const accessToken = this.tokenService.getAccessToken();
        return this.apiService.get('/verify/access/' + accessToken);
    }

    _validateRefreshToken() {
        const refreshToken = this.tokenService.getRefreshToken();
        return this.apiService.get('/verify/refresh/' + refreshToken);
    }

}
