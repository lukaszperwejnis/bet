'use strict';
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.authSaga = void 0;
// eslint-disable-next-line import/no-extraneous-dependencies
const effects_1 = require('@redux-saga/core/effects');
const _utils_1 = require('@utils');
const _config_1 = require('@config');
const _services_1 = require('@services');
const actions_1 = require('@stores/actions');
const types_1 = require('@stores/types');
const message_actions_1 = require('@stores/actions/message.actions');
const auth_actions_1 = require('@stores/actions/auth.actions');
const AuthProvider_1 = require('../../providers/AuthProvider');
function* login(action) {
  try {
    const { data } = yield effects_1.call(
      _services_1.authService.login,
      action.payload,
    );
    const { user } = data,
      tokens = __rest(data, ['user']);
    yield effects_1.call(_services_1.tokenService.setTokens, tokens);
    yield effects_1.call(_services_1.userService.setUser, user);
    AuthProvider_1.AuthProvider.getInstance().notify();
    yield effects_1.put(actions_1.successLogin(user));
    yield effects_1.call(
      _utils_1.redirect,
      _config_1.AppUrls.DASHBOARD.pattern,
    );
  } catch (error) {
    const errorMessage = _utils_1.mapErrorToMessage(error);
    yield effects_1.put(actions_1.failedLogin(errorMessage));
    yield effects_1.call(message_actions_1.messageActions.error, errorMessage);
  }
}
function* signup(action) {
  try {
    yield effects_1.call(_services_1.authService.signup, action.payload);
    yield effects_1.call(
      message_actions_1.messageActions.success,
      _utils_1.translate('signup.success'),
    );
    yield effects_1.put(auth_actions_1.successSignup());
    yield effects_1.call(_utils_1.redirect, _config_1.AppUrls.LOGIN.pattern);
  } catch (error) {
    if (_services_1.tokenService.isInvalidTokenError(error.response.data)) {
      yield effects_1.put(auth_actions_1.invalidTokenSignup());
      return;
    }
    const errorMessage = _utils_1.mapErrorToMessage(error);
    yield effects_1.put(auth_actions_1.failedSignup(errorMessage));
    yield effects_1.call(message_actions_1.messageActions.error, errorMessage);
  }
}
function* watchLogin() {
  yield effects_1.takeLatest(types_1.AuthActionType.Login, login);
}
function* watchSignup() {
  yield effects_1.takeLatest(types_1.AuthActionType.Signup, signup);
}
function* authSaga() {
  yield effects_1.all([
    effects_1.fork(watchLogin),
    effects_1.fork(watchSignup),
  ]);
}
exports.authSaga = authSaga;
