import { PasswordActionType } from '../types';
const initialState = {
    error: '',
    isLoading: false,
    isSuccess: false,
    hasInvalidToken: false,
};
export const passwordReducer = (state = initialState, action) => {
    switch (action.type) {
        case PasswordActionType.StartReset:
            return Object.assign(Object.assign({}, state), { isLoading: true, hasInvalidToken: false, error: '' });
        case PasswordActionType.SuccessStartReset:
            return Object.assign(Object.assign({}, state), { isSuccess: true, isLoading: false });
        case PasswordActionType.FailedStartReset:
            return Object.assign(Object.assign({}, state), { error: action.payload, isLoading: false });
        case PasswordActionType.InvalidTokenReset:
            return Object.assign(Object.assign({}, state), { hasInvalidToken: true, isLoading: false });
        default:
            return state;
    }
};
