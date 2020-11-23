import React, {ReactElement} from 'react';
import {RenderType, WithExcludedChildrenProps} from '../../../../types';
import {Wrapper, Radio as RadioComponent, RadioInput, Inner, Label} from './Radio.styles';

export interface RadioProps extends WithExcludedChildrenProps {
    id?: string;
    className?: string;
    labelClassName?: string;
    label: RenderType;
    value: string | number;
    checked?: boolean;
    name: string;
    disabled?: boolean;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const Radio = ({className, labelClassName, label, checked, disabled, ...otherProps}: RadioProps): ReactElement => {
    return (
        <Wrapper disabled={disabled}>
            <RadioComponent className={className}>
                <RadioInput checked={checked} disabled={disabled} {...otherProps} />
                <Inner checked={checked} />
            </RadioComponent>
            <Label data-radio-role="label" className={labelClassName} checked={checked}>
                {label}
            </Label>
        </Wrapper>
    );
};
