"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authReducer = void 0;
const types_1 = require("../types");
const initialState = {
    error: '',
    isLoading: false,
    currentUser: null,
    hasInvalidToken: false,
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types_1.AuthActionType.Login:
            return Object.assign(Object.assign({}, state), { isLoading: true, hasInvalidToken: false, error: '' });
        case types_1.AuthActionType.SuccessLogin:
            return Object.assign(Object.assign({}, state), { isLoading: false });
        case types_1.AuthActionType.FailedLogin:
            return Object.assign(Object.assign({}, state), { error: action.payload, isLoading: false });
        case types_1.AuthActionType.Signup:
            return Object.assign(Object.assign({}, state), { isLoading: true, hasInvalidToken: false, error: '' });
        case types_1.AuthActionType.SuccessSignup:
            return Object.assign(Object.assign({}, state), { isLoading: false });
        case types_1.AuthActionType.FailedSignup:
            return Object.assign(Object.assign({}, state), { isLoading: false });
        case types_1.AuthActionType.InvalidTokenSignup:
            return Object.assign(Object.assign({}, state), { hasInvalidToken: true, isLoading: false });
        default:
            return state;
    }
};
exports.authReducer = authReducer;
