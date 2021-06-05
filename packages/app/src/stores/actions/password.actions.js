import { PasswordActionType } from '@stores/types';
export const startReset = (payload) => ({
    type: PasswordActionType.StartReset,
    payload,
});
export const successStartReset = () => ({
    type: PasswordActionType.SuccessStartReset,
    payload: null,
});
export const failedStartReset = (payload) => ({
    type: PasswordActionType.FailedStartReset,
    payload,
});
export const reset = (payload) => ({
    type: PasswordActionType.Reset,
    payload,
});
export const successReset = () => ({
    type: PasswordActionType.SuccessReset,
    payload: null,
});
export const failedReset = (payload) => ({
    type: PasswordActionType.FailedReset,
    payload,
});
