import { StorageKeys } from '@constants';
import { localStorageService } from './localStorage.service';
class TokenService {
    constructor() {
        this.isTokenInvalid = (jwtToken) => {
            return TokenService.isExpired(TokenService.getExpirationDate(jwtToken));
        };
        this.isInvalidTokenError = (error) => {
            console.log({ error });
            return error.status === 500 && error.message === 'jwt malformed';
        };
    }
    setTokens({ accessToken, refreshToken }) {
        localStorageService.set(StorageKeys.AccessToken, accessToken);
        localStorageService.set(StorageKeys.RefreshToken, refreshToken);
    }
    clearTokens() {
        localStorageService.remove(StorageKeys.AccessToken);
        localStorageService.remove(StorageKeys.RefreshToken);
    }
    getAccessToken() {
        return localStorageService.get(StorageKeys.AccessToken);
    }
    static getExpirationDate(jwtToken) {
        try {
            const jwt = JSON.parse(atob(jwtToken.split('.')[1]));
            return (jwt && jwt.exp && jwt.exp * 1000) || -1;
        }
        catch (error) {
            return -1;
        }
    }
    static isExpired(exp) {
        return exp ? Date.now() > exp : false;
    }
}
// const setTokens = ({ accessToken, refreshToken }: Tokens): void => {
//   localStorageService.set(StorageKeys.AccessToken, accessToken);
//   localStorageService.set(StorageKeys.RefreshToken, refreshToken);
//
//   AuthProvider.getInstance().notify();
// };
// const clearTokens = (): void => {
//   localStorage.removeItem(StorageKeys.AccessToken);
//   localStorage.removeItem(StorageKeys.RefreshToken);
//
//   AuthProvider.getInstance().notify();
// };
// const getTokens = (): Tokens => {
//   const tokens = localStorage.getItem(AUTH_TOKEN_KEY);
//   if (!tokens) {
//     return null;
//   }
//
//   try {
//     return JSON.parse(tokens);
//   } catch (e) {
//     console.error(e);
//   }
// };
// const getAccessToken = (): string | null =>
//   localStorageService.get(StorageKeys.AccessToken);
// const getAccessToken = (): string | null => {
//   return localStorageService.get(StorageKeys.AccessToken);
//   const { accessToken } = getTokens();
//
//   if (!accessToken) {
//     return null;
//   }
//
//   if (isTokenInvalid(accessToken)) {
//     const tokens = await getRefreshedTokens();
//     setTokens(tokens);
//     return tokens.accessToken;
//   }
//
//   return accessToken;
// };
//
// type RefreshTokenResponse = {
//   status: number;
//   data: {
//     accessToken: string;
//     refreshToken: string;
//   };
// };
// const getRefreshedTokens = async (): Promise<Tokens> => {
//   const { refreshToken } = getTokens();
//   if (!refreshToken) {
//     return null;
//   }
//
//   const result = await apiService.post<RefreshTokenResponse>(
//     URLS.TOKENS.REFRESH_TOKEN,
//     { refreshToken },
//   );
//
//   console.log({ result });
//   if (result.status !== 201) {
//     return null;
//   }
//
//   return result.data;
// };
export const tokenService = new TokenService();
