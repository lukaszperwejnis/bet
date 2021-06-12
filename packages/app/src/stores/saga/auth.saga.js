var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// eslint-disable-next-line import/no-extraneous-dependencies
import { all, call, fork, takeLatest, put } from '@redux-saga/core/effects';
import { redirect, mapErrorToMessage, translate } from '@utils';
import { AppUrls } from '@config';
import { authService, tokenService, userService } from '@services';
import { successLogin, failedLogin } from '@stores/actions';
import { AuthActionType } from '@stores/types';
import { messageActions } from '@stores/actions/message.actions';
import { failedSignup, invalidTokenSignup, successSignup, } from '@stores/actions/auth.actions';
import { AuthProvider } from '../../providers/AuthProvider';
function* login(action) {
    try {
        const { data } = (yield call(authService.login, action.payload));
        const { user } = data, tokens = __rest(data, ["user"]);
        yield call(tokenService.setTokens, tokens);
        yield call(userService.setUser, user);
        AuthProvider.getInstance().notify();
        yield put(successLogin(user));
        yield call(redirect, AppUrls.DASHBOARD.pattern);
    }
    catch (error) {
        const errorMessage = mapErrorToMessage(error);
        yield put(failedLogin(errorMessage));
        yield call(messageActions.error, errorMessage);
    }
}
function* signup(action) {
    try {
        yield call(authService.signup, action.payload);
        yield call(messageActions.success, translate('signup.success'));
        yield put(successSignup());
        yield call(redirect, AppUrls.LOGIN.pattern);
    }
    catch (error) {
        if (tokenService.isInvalidTokenError(error.response.data)) {
            yield put(invalidTokenSignup());
            return;
        }
        const errorMessage = mapErrorToMessage(error);
        yield put(failedSignup(errorMessage));
        yield call(messageActions.error, errorMessage);
    }
}
function* watchLogin() {
    yield takeLatest(AuthActionType.Login, login);
}
function* watchSignup() {
    yield takeLatest(AuthActionType.Signup, signup);
}
export function* authSaga() {
    yield all([fork(watchLogin), fork(watchSignup)]);
}
