import { PasswordActionType } from '@stores/types';
import { ApiError } from '@structures';
interface Action<T> {
    type: PasswordActionType;
    payload: T;
}
export declare const startReset: <T>(payload: T) => Action<T>;
export declare const successStartReset: () => Action<null>;
export declare const failedStartReset: (payload: ApiError) => Action<ApiError>;
export declare const reset: <T>(payload: T) => Action<T>;
export declare const successReset: () => Action<null>;
export declare const failedReset: (payload: ApiError) => Action<ApiError>;
export declare const invalidTokenReset: () => Action<boolean>;
export declare type PasswordActions = ReturnType<typeof startReset> | ReturnType<typeof successStartReset> | ReturnType<typeof failedStartReset> | ReturnType<typeof reset> | ReturnType<typeof successReset> | ReturnType<typeof failedReset> | ReturnType<typeof invalidTokenReset>;
export {};
