'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.passwordSaga = void 0;
// eslint-disable-next-line import/no-extraneous-dependencies
const effects_1 = require('@redux-saga/core/effects');
const _utils_1 = require('@utils');
const _config_1 = require('@config');
const _services_1 = require('@services');
const actions_1 = require('@stores/actions');
const types_1 = require('@stores/types');
const message_actions_1 = require('@stores/actions/message.actions');
const password_actions_1 = require('@stores/actions/password.actions');
function* startReset(action) {
  try {
    yield effects_1.call(
      _services_1.passwordService.startReset,
      action.payload,
    );
    yield effects_1.put(actions_1.successStartReset());
  } catch (error) {
    const errorMessage = _utils_1.mapErrorToMessage(error);
    yield effects_1.put(actions_1.failedStartReset(errorMessage));
    yield effects_1.call(message_actions_1.messageActions.error, errorMessage);
  }
}
function* reset(action) {
  try {
    yield effects_1.call(_services_1.passwordService.reset, action.payload);
    yield effects_1.put(actions_1.successReset());
    yield effects_1.call(
      message_actions_1.messageActions.success,
      _utils_1.translate('resetPassword.success'),
    );
    yield effects_1.call(_utils_1.redirect, _config_1.AppUrls.LOGIN.pattern);
  } catch (error) {
    if (_services_1.tokenService.isInvalidTokenError(error.response.data)) {
      yield effects_1.put(password_actions_1.invalidTokenReset());
      return;
    }
    const errorMessage = _utils_1.mapErrorToMessage(error);
    yield effects_1.put(actions_1.failedReset(errorMessage));
    yield effects_1.call(message_actions_1.messageActions.error, errorMessage);
  }
}
function* watchStartReset() {
  yield effects_1.takeLatest(types_1.PasswordActionType.StartReset, startReset);
}
function* watchReset() {
  yield effects_1.takeLatest(types_1.PasswordActionType.Reset, reset);
}
function* passwordSaga() {
  yield effects_1.all([
    effects_1.fork(watchStartReset),
    effects_1.fork(watchReset),
  ]);
}
exports.passwordSaga = passwordSaga;
