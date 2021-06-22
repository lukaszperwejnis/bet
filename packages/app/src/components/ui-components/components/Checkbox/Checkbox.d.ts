import { FormEvent } from 'react';
import { RenderType, WithExcludedChildrenProps } from '@structures';
interface CheckboxProps extends WithExcludedChildrenProps {
    id?: string;
    className?: string;
    labelClassName?: string;
    label: RenderType;
    value: string;
    checked?: boolean;
    name: string;
    disabled?: boolean;
    onChange: (e: FormEvent<HTMLInputElement>) => void;
    onBlur?: (e: FormEvent<HTMLInputElement>) => void;
    title?: string;
}
export declare function Checkbox({ label, disabled, checked, title, ...props }: CheckboxProps): JSX.Element;
export {};
