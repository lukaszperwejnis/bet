import { AuthActionType } from '@stores/types';
import { ApiError } from '@structures';
interface Action<T> {
    type: AuthActionType;
    payload: T;
}
export declare const login: <T>(payload: T) => Action<T>;
export declare const successLogin: <T>(payload: T) => Action<T>;
export declare const failedLogin: (payload: ApiError) => Action<ApiError>;
export declare const signup: <T>(payload: T) => Action<T>;
export declare const successSignup: () => Action<null>;
export declare const failedSignup: (payload: ApiError) => Action<ApiError>;
export declare const invalidTokenSignup: () => Action<boolean>;
export declare type AuthActions = ReturnType<typeof login> | ReturnType<typeof successLogin> | ReturnType<typeof failedLogin> | ReturnType<typeof signup> | ReturnType<typeof successSignup> | ReturnType<typeof failedSignup> | ReturnType<typeof invalidTokenSignup>;
export {};
