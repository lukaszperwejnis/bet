import React from 'react';
import { Spin, Icon } from 'antd';
import './Loader.scss';

export const Loader = () => {
    return <Spin indicator={
        <Icon className='loader__icon' type="loading" spin />
    } />;
};

