import React from "react";
import PropTypes from 'prop-types';
import {InputNumber} from "antd";

export const TeamScoreField = ({min, max, onChange, value }) => {
    return <InputNumber min={min} max={max} value={value} onChange={onChange} />;
};

TeamScoreField.propTypes = {
    value: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

TeamScoreField.defaultProps = {
    min: 0,
    max: 99
};
