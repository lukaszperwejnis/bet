import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Redirect, Route, Switch, } from 'react-router-dom';
import { ErrorBoundary, Dashboard, Login, MailInvitationSignup, ResetPassword, SetPassword, } from '@pages';
import { AppUrls } from '@config';
import { useAuth } from '@hooks';
import { Layout } from '../components';
const PublicRoutes = () => (_jsx(ErrorBoundary, { children: _jsxs(Switch, { children: [_jsx(Route, { path: AppUrls.LOGIN.pattern, component: Login }, void 0),
            _jsx(Route, { path: AppUrls.MAIL_INVITATION_SIGNUP.pattern, component: MailInvitationSignup }, void 0),
            _jsx(Route, { path: AppUrls.RESET_PASSWORD.pattern, component: ResetPassword }, void 0),
            _jsx(Route, { path: AppUrls.SET_PASSWORD.pattern, component: SetPassword }, void 0),
            _jsx(Redirect, { to: AppUrls.LOGIN() }, void 0)] }, void 0) }, void 0));
const PrivateRoutes = () => (_jsx(ErrorBoundary, { children: _jsx(Layout, { children: _jsxs(Switch, { children: [_jsx(Route, { path: AppUrls.DASHBOARD.pattern, component: Dashboard }, void 0),
                _jsx(Redirect, { to: AppUrls.DASHBOARD.pattern }, void 0)] }, void 0) }, void 0) }, void 0));
export const Routes = () => {
    const [logged] = useAuth();
    console.log({ logged });
    return _jsx(Router, { children: logged ? _jsx(PrivateRoutes, {}, void 0) : _jsx(PublicRoutes, {}, void 0) }, void 0);
};
