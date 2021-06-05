// eslint-disable-next-line import/no-extraneous-dependencies
import { all, call, fork, takeLatest, put } from '@redux-saga/core/effects';
import { SuccessApiResponse, SagaParameter } from '@structures';
import { redirect, mapErrorToMessage, translate } from '@utils';
import { AppUrls } from '@config';
import { authService, tokenService, userService } from '@services';
import { successLogin, failedLogin } from '@stores/actions';
import { AuthActionType } from '@stores/types';
import { Signin, User } from '@bet/structures/user';
import { messageActions } from '@stores/actions/message.actions';
import { Signup } from '@bet/structures/user/Signup';
import {
  failedSignup,
  invalidTokenSignup,
  successSignup,
} from '@stores/actions/auth.actions';
import { AuthProvider } from '../../providers/AuthProvider';

type LoginAction = { payload: Signin.Payload };
type SignupAction = { payload: Signup.Payload };

function* login(action: SagaParameter<LoginAction>) {
  try {
    const { data } = (yield call(
      authService.login,
      action.payload,
    )) as SuccessApiResponse<Signin.Success>;

    const { user, ...tokens } = data;

    yield call(tokenService.setTokens, tokens);
    yield call(userService.setUser, user);
    AuthProvider.getInstance().notify();

    yield put(successLogin<User.DTO>(user));
    yield call(redirect as any, AppUrls.DASHBOARD.pattern);
  } catch (error) {
    const errorMessage = mapErrorToMessage(error);
    yield put(failedLogin(errorMessage));
    yield call(messageActions.error, errorMessage);
  }
}

function* signup(action: SagaParameter<SignupAction>) {
  try {
    yield call(authService.signup, action.payload);
    yield call(messageActions.success, translate('signup.success'));
    yield put(successSignup());
    yield call(redirect as any, AppUrls.LOGIN.pattern);
  } catch (error) {
    if (tokenService.isInvalidTokenError(error.response.data)) {
      yield put(invalidTokenSignup());
      return;
    }

    const errorMessage = mapErrorToMessage(error);
    yield put(failedSignup(errorMessage));
    yield call(messageActions.error, errorMessage);
  }
}

function* watchLogin(): unknown {
  yield takeLatest(AuthActionType.Login, login);
}

function* watchSignup(): unknown {
  yield takeLatest(AuthActionType.Signup, signup);
}

export function* authSaga(): unknown {
  yield all([fork(watchLogin), fork(watchSignup)]);
}
