import React, {ChangeEvent, ReactElement} from 'react';
import {WithExcludedChildrenProps} from '../../../../types';
import {Select as SelectComponent} from './Select.styles';

interface SelectProps extends WithExcludedChildrenProps {
    id?: string;
    name: string;
    placeholder: string;
    options: {
        name: string;
        value: string;
    }[];
    value: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    onBlur?: (e: ChangeEvent<HTMLSelectElement>) => void;
    errorMessage?: string;
    disabled?: boolean;
}

export const Select = ({placeholder, options, disabled, ...otherProps}: SelectProps): ReactElement => {
    return (
        <SelectComponent disabled={disabled} {...otherProps}>
            {placeholder && (
                <option value="" disabled>
                    {placeholder}
                </option>
            )}
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            ))}
        </SelectComponent>
    );
};
