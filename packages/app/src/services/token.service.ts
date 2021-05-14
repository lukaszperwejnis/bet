import { StorageKeys } from '@constants';
import { AuthProvider } from '../providers/AuthProvider';
import { localStorageService } from './localStorage.service';

type Tokens = {
  accessToken: string;
  refreshToken: string;
};

class TokenService {
  setTokens({ accessToken, refreshToken }: Tokens): void {
    localStorageService.set(StorageKeys.AccessToken, accessToken);
    localStorageService.set(StorageKeys.RefreshToken, refreshToken);

    AuthProvider.getInstance().notify();
  }

  clearTokens(): void {
    localStorage.removeItem(StorageKeys.AccessToken);
    localStorage.removeItem(StorageKeys.RefreshToken);

    AuthProvider.getInstance().notify();
  }

  getAccessToken(): string | null {
    return localStorageService.get(StorageKeys.AccessToken);
  }

  private static getExpirationDate(jwtToken: string): number | null {
    const jwt = JSON.parse(atob(jwtToken.split('.')[1]));
    return (jwt && jwt.exp && jwt.exp * 1000) || null;
  }

  private static isExpired(exp: number | null): boolean {
    return exp ? Date.now() > exp : false;
  }

  isTokenInvalid = (jwtToken: string): boolean => {
    return TokenService.isExpired(TokenService.getExpirationDate(jwtToken));
  };
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
