import React from 'react';
import {APIService} from "../../services/APIService";

export const withMailInvitationSignupApi = (WrappedComponent) => {
    return class withLoginApi extends React.Component {
        constructor(props) {
            super(props);
            this.apiService = new APIService();

            this.validateInvitationToken = this.validateInvitationToken.bind(this);
            this.signup = this.signup.bind(this);
        }

        validateInvitationToken(token) {
            return this.apiService.get('/verify/mail-invitation/' + token);
        }

        signup(data) {
            return this.apiService.post('/signup/mail-invitation', data);
        }

        render() {
            return <WrappedComponent {...this.props} validateInvitationToken={this.validateInvitationToken} signup={this.signup}/>;
        }
    }
};
