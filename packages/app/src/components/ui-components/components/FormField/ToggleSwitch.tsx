import React, {ReactElement} from 'react';
import {useField} from 'formik';
import {Wrapper, Error, Description} from './components';
import {RenderType, WithExcludedChildrenProps} from '../../../../types';
import {ToggleSwitch as ToggleSwitchComponent} from '../ToggleSwitch/ToggleSwitch';

interface ToggleSwitchProps extends WithExcludedChildrenProps {
    name: string;
    label: RenderType;
    valueToSet: string | boolean;
    disabled?: boolean;
    errorMessage?: string;
    description?: RenderType;
    error?: RenderType;
    wrapperClassName?: string;
    labelClassName?: string;
}

export const ToggleSwitch = ({label, description, valueToSet, errorMessage, wrapperClassName, ...props}: ToggleSwitchProps): ReactElement => {
    const [field, meta] = useField(props);
    const hasError = errorMessage || (meta.touched && meta.error);
    const error = errorMessage || meta.error;

    return (
        <Wrapper className={wrapperClassName}>
            <ToggleSwitchComponent
                id={field.name}
                label={label}
                name={field.name}
                value={valueToSet}
                onChange={field.onChange}
                onBlur={field.onBlur}
                checked={valueToSet === field.value}
                {...props}
            />
            {hasError && <Error data-error={field.name}>{error}</Error>}
            {description && <Description>{description}</Description>}
        </Wrapper>
    );
};
