import { Router, Redirect, Route, Switch } from 'react-router-dom';
import {
  ErrorBoundary,
  Dashboard,
  Login,
  Signup,
  StartResetPassword,
  ResetPassword,
} from '@pages';
import { AppUrls } from '@config';
import { useAuth } from '@hooks';
import { history } from '@utils';
import { Layout } from '@components';
import { Navbar } from '../components/Navbar/Navbar';

const PublicRoutes = (): JSX.Element => (
  <ErrorBoundary>
    <Switch>
      <Route path={AppUrls.LOGIN.pattern} component={Login} />
      <Route path={AppUrls.MAIL_INVITATION_SIGNUP.pattern} component={Signup} />
      <Route
        path={AppUrls.RESET_PASSWORD.pattern}
        component={StartResetPassword}
      />
      <Route path={AppUrls.SET_PASSWORD.pattern} component={ResetPassword} />
      <Redirect to={AppUrls.LOGIN()} />
    </Switch>
  </ErrorBoundary>
);

const PrivateRoutes = (): JSX.Element => (
  <ErrorBoundary>
    <Layout>
      <Navbar />
      <Switch>
        <Route path={AppUrls.DASHBOARD.pattern} component={Dashboard} />
        <Redirect to={AppUrls.DASHBOARD.pattern} />
      </Switch>
    </Layout>
  </ErrorBoundary>
);

export const Routes = (): JSX.Element => {
  const [logged] = useAuth();
  return (
    <Router history={history}>
      {logged ? <PrivateRoutes /> : <PublicRoutes />}
    </Router>
  );
};
