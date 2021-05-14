import { AuthActionType } from '@stores/types';

interface Action<T> {
  type: AuthActionType;
  payload: T;
}

export const login = <T>(payload: T): Action<T> =>
  ({
    type: AuthActionType.Login,
    payload,
  } as const);

export const successLogin = <T>(payload: T): Action<T> =>
  ({
    type: AuthActionType.SuccessLogin,
    payload,
  } as const);

export const failedLogin = <T>(payload: T): Action<T> =>
  ({
    type: AuthActionType.FailedLogin,
    payload,
  } as const);

export type AuthActions =
  | ReturnType<typeof login>
  | ReturnType<typeof successLogin>
  | ReturnType<typeof failedLogin>;
