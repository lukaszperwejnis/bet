import React from 'react';
import {APIService} from "../../services/APIService";
import {AuthService} from "../../services/AuthService";

export const withDashboardApi = (WrappedComponent) => {
    return class withDashboardApi extends React.Component {
        constructor(props) {
            super(props);
            this.apiService = new APIService();
            this.userService = new AuthService();

            this.state = {
                isLoading: false,
                data: null
            }
        }

        componentDidMount() {
            this.setState({
                isLoading: true
            });

            this.getData();

        }

        async getData() {
            const upcomingGames = await this._getUpcomingGames();
            console.log({upcomingGames})
        }

        _getUpcomingGames() {
            return this.apiService.get('/api/bets');
        }

        render() {
            if (!this.state.data) {
                return null;
            }

            return <WrappedComponent {...this.props} isLoading={this.state.isLoading} data={this.state.data}/>;
        }
    }
};

