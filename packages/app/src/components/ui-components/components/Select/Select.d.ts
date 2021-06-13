import { ChangeEvent } from 'react';
import { WithExcludedChildrenProps } from '@structures';
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
export declare const Select: ({ placeholder, options, disabled, ...otherProps }: SelectProps) => JSX.Element;
export {};