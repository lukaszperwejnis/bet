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
import { redirect, mapErrorToMessage } from '@utils';
import { AppUrls } from '@config';
import { authService, tokenService, userService } from '@services';
import { successLogin, failedLogin } from '@stores/actions';
import { AuthActionType } from '@stores/types';
import { messageActions } from '@stores/actions/message.actions';
function* login(action) {
    try {
        // yield call(
        //   messageActions.success,
        //   intl.formatMessage({ id: 'login.header' }),
        // );
        console.log('LOGIN ACTION');
        const _a = (yield call(authService.login, action.payload)), { data, status } = _a, other = __rest(_a, ["data", "status"]);
        console.log({
            data,
            status,
            other,
        }, 'LOGIN');
        if (status !== 201) {
            yield put(failedLogin('Unknown error'));
            return;
        }
        const { user } = data, tokens = __rest(data, ["user"]);
        yield call(tokenService.setTokens, tokens);
        yield call(userService.setUser, user);
        // TODO User type
        yield put(successLogin(user));
        yield call(redirect, AppUrls.DASHBOARD.pattern);
    }
    catch (error) {
        const errorMessage = mapErrorToMessage(error);
        yield put(failedLogin(errorMessage));
        yield call(messageActions.error, errorMessage);
    }
}
function* watchLogin() {
    yield takeLatest(AuthActionType.Login, login);
}
export function* authSaga() {
    yield all([fork(watchLogin)]);
}
