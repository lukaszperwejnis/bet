import React, {ReactElement} from 'react';
import {Wrapper, CheckboxInput, Inner, Label} from './Checkbox.styles';
import {RenderType, WithExcludedChildrenProps} from '../../../../types';

interface CheckboxProps extends WithExcludedChildrenProps {
    id?: string;
    className?: string;
    labelClassName?: string;
    label: RenderType;
    value: string;
    checked?: boolean;
    name: string;
    disabled?: boolean;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FormEvent<HTMLInputElement>) => void;
    title?: string;
}

export function Checkbox({label, disabled, checked, title, ...props}: CheckboxProps): ReactElement {
    return (
        <Wrapper disabled={disabled}>
            <CheckboxInput disabled={disabled} checked={checked} {...props} />
            <Inner />
            <Label title={title}>{label}</Label>
        </Wrapper>
    );
}
