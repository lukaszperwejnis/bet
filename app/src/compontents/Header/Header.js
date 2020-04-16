import * as React from 'react';
import { withRouter, NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";

export const Header = withRouter(function Header(){
    const { pathname } = this.props.location;
    const selectedKey = !pathname.includes('favorites') ? '1' : '2';

    return <Layout.Header
        className="header">
        <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={[selectedKey]}
        >
            <Menu.Item key="1"><NavLink to="/">Currencies</NavLink></Menu.Item>
            <Menu.Item key="2"><NavLink to="/favorites">Favorites</NavLink></Menu.Item>
        </Menu>
    </Layout.Header>
});
