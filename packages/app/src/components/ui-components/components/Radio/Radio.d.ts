import { FormEvent } from 'react';
import { RenderType, WithExcludedChildrenProps } from '@structures';
export interface RadioProps extends WithExcludedChildrenProps {
    id?: string;
    className?: string;
    labelClassName?: string;
    label: RenderType;
    value: string | number;
    checked?: boolean;
    name: string;
    disabled?: boolean;
    onChange: (e: FormEvent<HTMLInputElement>) => void;
    onBlur?: (e: FormEvent<HTMLInputElement>) => void;
}
export declare const Radio: ({ className, labelClassName, label, checked, disabled, ...otherProps }: RadioProps) => JSX.Element;
