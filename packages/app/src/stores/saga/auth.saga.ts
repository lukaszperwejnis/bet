// eslint-disable-next-line import/no-extraneous-dependencies
import { all, call, fork, takeLatest, put } from '@redux-saga/core/effects';
import { SuccessApiResponse, SagaParameter } from '@structures';
import { redirect } from '@utils';
import { AppUrls } from '@config';
import { authService, tokenService, userService } from '@services';
import { successLogin, failedLogin } from '@stores/actions';
import { AuthActionType } from '@stores/types';

interface LoginSuccessResponse extends SuccessApiResponse {
  data: {
    accessToken: string;
    refreshToken: string;
    user: Record<string, unknown>;
  };
}

// type LoginErrorResponse = {
//   status: number;
//   message: string;
// };

type LoginAction = { payload: { email: string; password: string } };

function* login(action: SagaParameter<LoginAction>) {
  try {
    const { data } = (yield call(
      authService.login,
      action.payload,
    )) as LoginSuccessResponse;

    const { user, ...tokens } = data;

    yield call(tokenService.setTokens, tokens);
    yield call(userService.setUser, user);

    // TODO User type
    yield put(successLogin<any>(user));
    yield call(redirect as any, AppUrls.DASHBOARD);
  } catch (e) {
    yield put(failedLogin<any>(e));
    console.log(e);
  }
}

function* watchLogin(): unknown {
  yield takeLatest(AuthActionType.Login, login);
}

export function* authSaga(): unknown {
  yield all([fork(watchLogin)]);
}
