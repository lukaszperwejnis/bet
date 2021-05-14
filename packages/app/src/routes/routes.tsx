import { ReactElement } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import {
  ErrorBoundary,
  Dashboard,
  Login,
  MailInvitationSignup,
  ResetPassword,
  SetPassword,
} from '@pages';
import { AppUrls } from '@config';
import { useAuth } from '@hooks';
import { Layout } from '../components';

const PublicRoutes = (): ReactElement => (
  <ErrorBoundary>
    <Switch>
      <Route path={AppUrls.LOGIN.pattern} component={Login} />
      <Route
        path={AppUrls.MAIL_INVITATION_SIGNUP.pattern}
        component={MailInvitationSignup}
      />
      <Route path={AppUrls.RESET_PASSWORD.pattern} component={ResetPassword} />
      <Route path={AppUrls.SET_PASSWORD.pattern} component={SetPassword} />
      <Redirect to={AppUrls.LOGIN()} />
    </Switch>
  </ErrorBoundary>
);

const PrivateRoutes = (): ReactElement => (
  <ErrorBoundary>
    {/* <SidebarMenu/> */}
    <Layout>
      {/* <Navbar /> */}
      <Switch>
        <Route path={AppUrls.DASHBOARD.pattern} component={Dashboard} />
        <Redirect to={AppUrls.DASHBOARD.pattern} />
      </Switch>
    </Layout>
  </ErrorBoundary>
);

export const Routes = (): ReactElement => {
  const [logged] = useAuth();
  console.log({ logged });
  return <Router>{logged ? <PrivateRoutes /> : <PublicRoutes />}</Router>;
};
