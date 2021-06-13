import { WithExcludedChildrenProps } from "../../types/index";
export interface InputProps extends WithExcludedChildrenProps {
    disabled?: boolean;
    isInvalid?: boolean;
    placeholder?: string;
    min?: number;
    max?: number;
}
export declare const Input: import("styled-components").StyledComponent<"input", any, InputProps, never>;
