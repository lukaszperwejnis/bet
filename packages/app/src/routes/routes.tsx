import React, {ReactElement} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {URLS} from './URLS';
import {ErrorBoundary} from '../containers/ErrorBoundary/ErrorBoundary';
import {Layout} from '../components';
import {Dashboard} from '../containers/Dashboard/Dashboard';
import {Login} from '../containers/Login/Login';
import {MailInvitationSignup} from '../containers/MailInvitationSignup/MailInvitationSignup';
import {useAuth} from '../hooks/useAuth.hook';
import {ResetPassword} from '../containers/ResetPassword/ResetPassword';
import {SetPassword} from '../containers/SetPassword/SetPassword';

export const Routes = (): ReactElement => {
    const [logged] = useAuth();
    return <Router>{logged ? <PrivateRoutes /> : <PublicRoutes />}</Router>;
};

const PublicRoutes = (): ReactElement => (
    <ErrorBoundary>
        <Switch>
            <Route path={URLS.LOGIN.pattern} component={Login} />
            <Route path={URLS.MAIL_INVITATION_SIGNUP.pattern} component={MailInvitationSignup} />
            <Route path={URLS.RESET_PASSWORD.pattern} component={ResetPassword} />
            <Route path={URLS.SET_PASSWORD.pattern} component={SetPassword} />
            <Redirect to={URLS.LOGIN()} />
        </Switch>
    </ErrorBoundary>
);

const PrivateRoutes = (): ReactElement => (
    <ErrorBoundary>
        {/*<SidebarMenu/>*/}
        <Layout>
            {/*<Navbar />*/}
            <Switch>
                <Route path={URLS.DASHBOARD.pattern} component={Dashboard} />
                <Redirect to={URLS.DASHBOARD.pattern} />
            </Switch>
        </Layout>
    </ErrorBoundary>
);
