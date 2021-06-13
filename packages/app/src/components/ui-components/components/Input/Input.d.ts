import { WithExcludedChildrenProps } from '../../../../types';
declare type InputType = 'text' | 'password' | 'email' | 'number';
export interface InputProps extends WithExcludedChildrenProps {
    type?: InputType;
    disabled?: boolean;
    isInvalid?: boolean;
    placeholder?: string;
    min?: number;
    max?: number;
}
export declare const Input: import("styled-components").StyledComponent<"input", any, InputProps, never>;
export {};
