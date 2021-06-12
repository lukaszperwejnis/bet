// eslint-disable-next-line import/no-extraneous-dependencies
import { all, call, fork, takeLatest, put } from '@redux-saga/core/effects';
import { redirect, mapErrorToMessage, translate } from '@utils';
import { AppUrls } from '@config';
import { passwordService, tokenService } from '@services';
import { successStartReset, failedStartReset, failedReset, successReset, } from '@stores/actions';
import { PasswordActionType } from '@stores/types';
import { messageActions } from '@stores/actions/message.actions';
import { invalidTokenReset } from '@stores/actions/password.actions';
function* startReset(action) {
    try {
        yield call(passwordService.startReset, action.payload);
        yield put(successStartReset());
    }
    catch (error) {
        const errorMessage = mapErrorToMessage(error);
        yield put(failedStartReset(errorMessage));
        yield call(messageActions.error, errorMessage);
    }
}
function* reset(action) {
    try {
        yield call(passwordService.reset, action.payload);
        yield put(successReset());
        yield call(messageActions.success, translate('resetPassword.success'));
        yield call(redirect, AppUrls.LOGIN.pattern);
    }
    catch (error) {
        if (tokenService.isInvalidTokenError(error.response.data)) {
            yield put(invalidTokenReset());
            return;
        }
        const errorMessage = mapErrorToMessage(error);
        yield put(failedReset(errorMessage));
        yield call(messageActions.error, errorMessage);
    }
}
function* watchStartReset() {
    yield takeLatest(PasswordActionType.StartReset, startReset);
}
function* watchReset() {
    yield takeLatest(PasswordActionType.Reset, reset);
}
export function* passwordSaga() {
    yield all([fork(watchStartReset), fork(watchReset)]);
}
