import React from 'react';
import {APIService} from "../../services/APIService";

export const withResetPasswordApi = (WrappedComponent) => {
    return class withLoginApi extends React.Component {
        constructor(props) {
            super(props);
            this.apiService = new APIService();
            this.sendResetPasswordEmail = this.sendResetPasswordEmail.bind(this);
            this.resetPassword = this.resetPassword.bind(this);
            this.validateResetPasswordToken = this.validateResetPasswordToken.bind(this);
        }

        sendResetPasswordEmail(data) {
            return this.apiService.post('/reset-password/start', data);
        }

        resetPassword(data) {
            return this.apiService.post('/reset-password', data);
        }

        validateResetPasswordToken(token) {
            return this.apiService.get('/verify/reset-password/' + token);
        }

        render() {
            return <WrappedComponent {...this.props}
                                     sendResetPasswordEmail={this.sendResetPasswordEmail}
                                     resetPassword={this.resetPassword}
                                     validateResetPasswordToken={this.validateResetPasswordToken}/>;
        }
    }
};
