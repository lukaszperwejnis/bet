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
export const signup = (payload) => ({
    type: AuthActionType.Signup,
    payload,
});
export const successSignup = () => ({
    type: AuthActionType.SuccessSignup,
    payload: null,
});
export const failedSignup = (payload) => ({
    type: AuthActionType.FailedSignup,
    payload,
});
export const invalidTokenSignup = () => ({
    type: AuthActionType.InvalidTokenSignup,
    payload: true,
});
