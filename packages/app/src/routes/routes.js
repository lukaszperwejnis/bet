import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import { ErrorBoundary, Dashboard, Login, Signup, StartResetPassword, ResetPassword, } from '@pages';
import { AppUrls } from '@config';
import { useAuth } from '@hooks';
import { history } from '@utils';
import { Layout } from '@components';
const PublicRoutes = () => (_jsx(ErrorBoundary, { children: _jsxs(Switch, { children: [_jsx(Route, { path: AppUrls.LOGIN.pattern, component: Login }, void 0),
            _jsx(Route, { path: AppUrls.MAIL_INVITATION_SIGNUP.pattern, component: Signup }, void 0),
            _jsx(Route, { path: AppUrls.RESET_PASSWORD.pattern, component: StartResetPassword }, void 0),
            _jsx(Route, { path: AppUrls.SET_PASSWORD.pattern, component: ResetPassword }, void 0),
            _jsx(Redirect, { to: AppUrls.LOGIN() }, void 0)] }, void 0) }, void 0));
const PrivateRoutes = () => (_jsx(ErrorBoundary, { children: _jsx(Layout, { children: _jsxs(Switch, { children: [_jsx(Route, { path: AppUrls.DASHBOARD.pattern, component: Dashboard }, void 0),
                _jsx(Redirect, { to: AppUrls.DASHBOARD.pattern }, void 0)] }, void 0) }, void 0) }, void 0));
export const Routes = () => {
    const [logged] = useAuth();
    return (_jsx(Router, Object.assign({ history: history }, { children: logged ? _jsx(PrivateRoutes, {}, void 0) : _jsx(PublicRoutes, {}, void 0) }), void 0));
};
