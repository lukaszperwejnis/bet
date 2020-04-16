import React from 'react';
import PropTypes from 'prop-types';
import {Input as AntdInput} from 'antd';
import classNames from 'classnames';
import {Wrapper} from "../Wrapper/Wrapper";
import {Label} from "../Label/Label";
import {Error} from "../Error/Error";

const TYPES = {
    TEXT: 'text',
    PASSWORD: 'password'
};

export const Input = ({wrapperClassName, labelClassName, className, label, field, type, form, ...otherProps}) => {
    const valid = !(form.touched[field.name] && form.errors[field.name]);

    return <Wrapper className={wrapperClassName}>
        {label && <Label htmlFor={field.name} className={labelClassName}>{label}</Label>}
        {type === TYPES.TEXT && <AntdInput className={classNames(className)}
                                           {...field}
                                           {...otherProps}
        />}
        {type === TYPES.PASSWORD && <AntdInput.Password className={classNames(className)}
                                                        {...field}
                                                        {...otherProps}/>}
        {!valid && <Error>{form.errors[field.name]}</Error>}
    </Wrapper>
};

Input.propTypes = {
    field: PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        onBlur: PropTypes.func
    }),
    wrapperClassName: PropTypes.string,
    labelClassName: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.node,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.oneOf([TYPES.TEXT, TYPES.PASSWORD])
};

Input.defaultProps = {
    type: TYPES.TEXT
};
