import { StorageKeys } from '@constants';
import { ErrorApiResponse } from '@structures';
import { localStorageService } from './localStorage.service';

type Tokens = {
  accessToken: string;
  refreshToken: string;
};

class TokenService {
  setTokens({ accessToken, refreshToken }: Tokens): void {
    localStorageService.set(StorageKeys.AccessToken, accessToken);
    localStorageService.set(StorageKeys.RefreshToken, refreshToken);
  }

  clearTokens(): void {
    localStorageService.remove(StorageKeys.AccessToken);
    localStorageService.remove(StorageKeys.RefreshToken);
  }

  getAccessToken(): string | null {
    return localStorageService.get(StorageKeys.AccessToken);
  }

  private static getExpirationDate(jwtToken: string): number {
    try {
      const jwt = JSON.parse(atob(jwtToken.split('.')[1]));
      return (jwt && jwt.exp && jwt.exp * 1000) || -1;
    } catch (error) {
      return -1;
    }
  }

  private static isExpired(exp: number | null): boolean {
    return exp ? Date.now() > exp : false;
  }

  isTokenInvalid = (jwtToken: string): boolean => {
    return TokenService.isExpired(TokenService.getExpirationDate(jwtToken));
  };

  isInvalidTokenError = (error: ErrorApiResponse): boolean => {
    return error.status === 500 && error.message === 'jwt malformed';
  };
}

export const tokenService = new TokenService();
