import { StorageKeys } from '@constants';
import { User } from '@bet/structures/user';
import { tokenService } from './token.service';
import { URLS } from '../urls';
import { localStorageService } from './localStorage.service';
import { ApiService } from './ApiService/ApiService';
import { AuthProvider } from '../providers/AuthProvider';

// TODO move to bet-structures
type ValidateInvitationTokenResult = {
  status: number;
  message?: string;
  data?: {
    email: string;
    iat: number;
    exp: number;
  };
};

class AppService extends ApiService {
  setUser = (user: User.DTO) => {
    localStorageService.set(StorageKeys.User, user);
  };

  getUser = (): User.DTO | null =>
    localStorageService.get<User.DTO>(StorageKeys.User);

  validateInvitationToken = (
    token: string,
  ): Promise<ValidateInvitationTokenResult> =>
    this.get<ValidateInvitationTokenResult>(
      URLS.TOKENS.MAIL_INVITATION + token,
    );

  logout = () => {
    tokenService.clearTokens();
    localStorageService.remove(StorageKeys.User);
    AuthProvider.getInstance().notify();
  };

  isLoggedIn = (): boolean => {
    return [
      StorageKeys.AccessToken,
      StorageKeys.RefreshToken,
      StorageKeys.User,
    ].every((storageKey) => Boolean(localStorageService.get(storageKey)));
  };
}

export const userService = new AppService();
