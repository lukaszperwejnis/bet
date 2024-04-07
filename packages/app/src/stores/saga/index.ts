import { all, fork } from 'redux-saga/effects';
import { authSaga, watchLogin, watchSignup } from './auth.saga';
import { passwordSaga } from './password.saga';

export function* rootSaga() {
  yield all([fork(authSaga), fork(passwordSaga)]);
}

export { authSaga, passwordSaga, watchLogin, watchSignup };
