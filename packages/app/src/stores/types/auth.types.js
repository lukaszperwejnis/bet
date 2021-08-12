'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.AuthActionType = void 0;
var AuthActionType;
(function (AuthActionType) {
  AuthActionType['Login'] = 'LOGIN';
  AuthActionType['SuccessLogin'] = 'SUCCESS_LOGIN';
  AuthActionType['FailedLogin'] = 'FAILED_LOGIN';
  AuthActionType['Signup'] = 'SIGNUP';
  AuthActionType['SuccessSignup'] = 'SUCCESS_SIGNUP';
  AuthActionType['FailedSignup'] = 'FAILED_SIGNUP';
  AuthActionType['InvalidTokenSignup'] = 'INVALID_TOKEN_SIGNUP';
})((AuthActionType = exports.AuthActionType || (exports.AuthActionType = {})));
