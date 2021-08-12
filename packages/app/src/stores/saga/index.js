'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.rootSaga = void 0;
const effects_1 = require('redux-saga/effects');
const auth_saga_1 = require('./auth.saga');
const password_saga_1 = require('./password.saga');
function* rootSaga() {
  yield effects_1.all([
    effects_1.fork(auth_saga_1.authSaga),
    effects_1.fork(password_saga_1.passwordSaga),
  ]);
}
exports.rootSaga = rootSaga;
