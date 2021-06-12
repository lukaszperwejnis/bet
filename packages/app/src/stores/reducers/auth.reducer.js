import { AuthActionType } from '../types';
const initialState = {
    error: '',
    isLoading: false,
    currentUser: null,
    hasInvalidToken: false,
};
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AuthActionType.Login:
            return Object.assign(Object.assign({}, state), { isLoading: true, hasInvalidToken: false, error: '' });
        case AuthActionType.SuccessLogin:
            return Object.assign(Object.assign({}, state), { isLoading: false });
        case AuthActionType.FailedLogin:
            return Object.assign(Object.assign({}, state), { error: action.payload, isLoading: false });
        case AuthActionType.Signup:
            return Object.assign(Object.assign({}, state), { isLoading: true, hasInvalidToken: false, error: '' });
        case AuthActionType.SuccessSignup:
            return Object.assign(Object.assign({}, state), { isLoading: false });
        case AuthActionType.FailedSignup:
            return Object.assign(Object.assign({}, state), { isLoading: false });
        case AuthActionType.InvalidTokenSignup:
            return Object.assign(Object.assign({}, state), { hasInvalidToken: true, isLoading: false });
        default:
            return state;
    }
};
