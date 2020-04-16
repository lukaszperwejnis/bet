import * as React from 'react';
import {Redirect, Route, Router, Switch} from "react-router-dom";
import history from "./utils/history";
import {Login} from "./containers/Login/Login";
import {MailInvitationSignup} from "./containers/MailInvitationSignup/MailInvitationSignup";
import {InvalidSignupToken} from "./containers/InvalidSignupToken/InvalidSignupToken";
import {Dashboard} from "./containers/Dashboard/Dashboard";
import {ResetPasswordRequest} from "./containers/ResetPassword/ResetPasswordRequest/ResetPasswordRequest";
import {ResetPasswordUpdate} from "./containers/ResetPassword/ResetPasswordUpdate/ResetPasswordUpdate";
import {AuthService} from "./services/AuthService";

const authService = new AuthService();

export const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/mail-invitation-signup/:token' component={MailInvitationSignup}/>
                <Route path='/invalid-signup-token' component={InvalidSignupToken}/>
                <Route path='/reset-password/:token' component={ResetPasswordUpdate}/>
                <Route path='/reset-password' component={ResetPasswordRequest}/>
                <Route path='/dashboard' component={Dashboard}/>
                <Redirect to='/login'/>
            </Switch>
        </Router>
    )
};


function ProtectedRoute({component: Component, ...otherProps}) {
    return (
        <Route
            {...otherProps}
            render={(props) => {
                authService.isLoggedIn().then(isLoggedIn => {
                    console.log({isLoggedIn}, 'prot4ected');
                    if (false) {
                        console.log(Component, isLoggedIn);
                        return <Component {...props} />
                    }
                    console.log('redirect');
                    return <Redirect to='/login'/>
                });
            }}
        />
    )
}
