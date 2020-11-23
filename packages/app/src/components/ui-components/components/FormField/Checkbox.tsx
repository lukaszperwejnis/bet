import React, {ReactElement} from 'react';
import {useField} from 'formik';
import {Wrapper} from './components';
import {RenderType, WithExcludedChildrenProps} from '../../../../types';
import {Checkbox as CheckboxComponent} from '../Checkbox/Checkbox';

interface FormFieldCheckboxProps extends WithExcludedChildrenProps {
    name: string;
    label: RenderType;
    checked: boolean;
    disabled?: boolean;
    wrapperClassName?: string;
    labelClassName?: string;
}

export const Checkbox = ({label, checked, wrapperClassName, ...props}: FormFieldCheckboxProps): ReactElement => {
    const [field] = useField(props);
    return (
        <Wrapper className={wrapperClassName}>
            <CheckboxComponent
                id={field.name}
                label={label}
                name={field.name}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                checked={checked}
                {...props}
            />
        </Wrapper>
    );
};
