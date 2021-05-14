import { StorageKeys } from '@constants';
import { tokenService } from './token.service';
import { URLS } from '../urls';
import { localStorageService } from './localStorage.service';
import { ApiService } from './ApiService/ApiService';

// type LoginResponse = {
//   status: number;
//   data?: {
//     accessToken: string;
//     refreshToken: string;
//     user: Record<string, unknown>;
//   };
//   message?: string;
// };
//
// async function login(
//   email: string,
//   password: string,
// ): Promise<Record<string, unknown>> {
//   // todo set tokens
//
//   const { status, message, data } = await apiService.post<LoginResponse>(
//     URLS.USER.SIGNIN,
//     {
//       email,
//       password,
//     },
//   );
//
//   if (status !== 201) {
//     return {
//       status,
//       message,
//     };
//   }
//
//   const { user, ...tokens } = data;
//
//   tokenService.setTokens(tokens);
//   localStorage.setItem('user', JSON.stringify(user));
//
//   return user;
// }
//
// function logout(): void {
//   tokenService.clearTokens();
//   localStorage.removeItem('user');
// }
//
// function isLoggedIn(): boolean {
//   return !!tokenService.getTokens();
// }
//
// async function signup(token: string, password: string): Promise<unknown> {
//   return apiService.post(URLS.USER.SIGNUP, { token, password });
// }
//
// async function startResetPassword(email: string): Promise<Response> {
//   return apiService.post(URLS.USER.START_RESET_PASSWORD, { email });
// }
//
// async function resetPassword(data: {
//   token: string;
//   password: string;
// }): Promise<Response> {
//   return apiService.post(URLS.USER.RESET_PASSWORD, data);
// }
//
// function validateInvitationToken(
//   token: string,
// ): Promise<ValidateInvitationTokenResult> {
//   return apiService.get<ValidateInvitationTokenResult>(
//     URLS.TOKENS.MAIL_INVITATION + token,
//   );
// }
//
// // todo return type user
// function getUser() {
//   const user = localStorage.getItem('user');
//   try {
//     return user ? JSON.parse(user) : null;
//   } catch (error) {
//     console.error(error);
//   }
// }
//
// export const userService = {
//   login,
//   logout,
//   isLoggedIn,
//   signup,
//   validateInvitationToken,
//   getUser,
//   startResetPassword,
//   resetPassword,
// };

type ValidateInvitationTokenResult = {
  status: number;
  message?: string;
  data?: {
    email: string;
    iat: number;
    exp: number;
  };
};

class UserService extends ApiService {
  // TODO user type
  setUser = (user: any): void =>
    localStorageService.set(StorageKeys.User, user);

  // TODO user type
  getUser = (): any => localStorageService.get<any>(StorageKeys.User);

  validateInvitationToken = (
    token: string,
  ): Promise<ValidateInvitationTokenResult> =>
    this.get<ValidateInvitationTokenResult>(
      URLS.TOKENS.MAIL_INVITATION + token,
    );

  logout = (): void => {
    tokenService.clearTokens();
    localStorageService.remove(StorageKeys.User);
  };

  isLoggedIn = (): boolean => {
    return [
      StorageKeys.AccessToken,
      StorageKeys.RefreshToken,
      StorageKeys.User,
    ].every((storageKey) => Boolean(localStorageService.get(storageKey)));
  };
}

export const userService = new UserService();
