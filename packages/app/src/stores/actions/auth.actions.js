import { AuthActionType } from '@stores/types';
export const login = (payload) => ({
    type: AuthActionType.Login,
    payload,
});
export const successLogin = (payload) => ({
    type: AuthActionType.SuccessLogin,
    payload,
});
export const failedLogin = (payload) => ({
    type: AuthActionType.FailedLogin,
    payload,
});
