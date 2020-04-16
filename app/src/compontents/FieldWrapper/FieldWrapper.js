import React from "react";
import PropTypes from "prop-types";
import {Field} from "formik";

export const FieldWrapper = ({className, fieldClassName, component, ...otherProps}) => {
    return <div className={className}>
        <Field component={component} className={fieldClassName} {...otherProps} />
    </div>;
};

FieldWrapper.propTypes = {
    name: PropTypes.string.isRequired,
    component: PropTypes.func.isRequired,
    label: PropTypes.node
};
