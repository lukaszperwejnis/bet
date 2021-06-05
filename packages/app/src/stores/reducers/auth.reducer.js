import { AuthActionType } from '../types';
const initialState = {
    error: '',
    isLoading: false,
    currentUser: null,
};
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AuthActionType.Login:
            return Object.assign(Object.assign({}, state), { isLoading: true, error: '' });
        case AuthActionType.SuccessLogin:
            return Object.assign(Object.assign({}, state), { isLoading: false });
        case AuthActionType.FailedLogin:
            return Object.assign(Object.assign({}, state), { error: action.payload, isLoading: false });
        default:
            return state;
    }
};
