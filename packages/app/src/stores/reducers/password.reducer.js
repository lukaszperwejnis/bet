'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.passwordReducer = void 0;
const types_1 = require('../types');
const initialState = {
  error: '',
  isLoading: false,
  isSuccess: false,
  hasInvalidToken: false,
};
const passwordReducer = (state = initialState, action) => {
  switch (action.type) {
    case types_1.PasswordActionType.StartReset:
      return Object.assign(Object.assign({}, state), {
        isLoading: true,
        hasInvalidToken: false,
        error: '',
      });
    case types_1.PasswordActionType.SuccessStartReset:
      return Object.assign(Object.assign({}, state), {
        isSuccess: true,
        isLoading: false,
      });
    case types_1.PasswordActionType.FailedStartReset:
      return Object.assign(Object.assign({}, state), {
        error: action.payload,
        isLoading: false,
      });
    case types_1.PasswordActionType.InvalidTokenReset:
      return Object.assign(Object.assign({}, state), {
        hasInvalidToken: true,
        isLoading: false,
      });
    default:
      return state;
  }
};
exports.passwordReducer = passwordReducer;
