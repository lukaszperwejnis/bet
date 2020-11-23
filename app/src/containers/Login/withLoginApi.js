import React from 'react';
import {APIService} from "../../services/APIService";
import {AuthService} from "../../services/AuthService";

export const withLoginApi = (WrappedComponent) => {
    return class withLoginApi extends React.Component {
        constructor(props) {
            super(props);
            this.apiService = new APIService();
            this.userService = new AuthService();
            this.signin = this.signin.bind(this);
        }

        signin(data) {
            return this.apiService.post('/signin', data)
                .then((res) => {
                    if (res) {
                        res.data && this.authService.onLogin(res.data);
                        return res;
                    }
                });
        }

        render() {
            return <WrappedComponent {...this.props} signin={this.signin}/>;
        }
    }
};

