export class TokenService {
    setAccessToken(token) {
        localStorage.setItem('accessToken', token);
    }

    getAccessToken() {
        return localStorage.getItem('accessToken');
    }

    setRefreshToken(token) {
        localStorage.setItem('refreshToken', token);
    }

    getRefreshToken() {
        return localStorage.getItem('refreshToken');
    }

    clearTokens() {
        localStorage.clear();
    }

}
