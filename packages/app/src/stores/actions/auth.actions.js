'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.invalidTokenSignup =
  exports.failedSignup =
  exports.successSignup =
  exports.signup =
  exports.failedLogin =
  exports.successLogin =
  exports.login =
    void 0;
const types_1 = require('@stores/types');
const login = (payload) => ({
  type: types_1.AuthActionType.Login,
  payload,
});
exports.login = login;
const successLogin = (payload) => ({
  type: types_1.AuthActionType.SuccessLogin,
  payload,
});
exports.successLogin = successLogin;
const failedLogin = (payload) => ({
  type: types_1.AuthActionType.FailedLogin,
  payload,
});
exports.failedLogin = failedLogin;
const signup = (payload) => ({
  type: types_1.AuthActionType.Signup,
  payload,
});
exports.signup = signup;
const successSignup = () => ({
  type: types_1.AuthActionType.SuccessSignup,
  payload: null,
});
exports.successSignup = successSignup;
const failedSignup = (payload) => ({
  type: types_1.AuthActionType.FailedSignup,
  payload,
});
exports.failedSignup = failedSignup;
const invalidTokenSignup = () => ({
  type: types_1.AuthActionType.InvalidTokenSignup,
  payload: true,
});
exports.invalidTokenSignup = invalidTokenSignup;
