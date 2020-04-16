import React from 'react';
import {compose} from 'redux';
import {connect} from "react-redux";
import {withDashboardApi} from "./withDashboardApi";

class DashboardComponent extends React.PureComponent {
    render() {
        console.log(this.props);
        return <div>

        </div>
    }
}

const mapStateToProps = ({auth}) => ({user: auth.user});

export const Dashboard = compose(
    withDashboardApi,
    connect(mapStateToProps, null)
)(DashboardComponent);
