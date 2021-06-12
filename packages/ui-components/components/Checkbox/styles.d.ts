import { WithChildrenProps, WithExcludedChildrenProps } from "../../types";
export declare const CheckboxInput: import("styled-components").StyledComponent<"input", any, WithExcludedChildrenProps, never>;
interface InnerProps extends WithExcludedChildrenProps {
    disabled?: boolean;
}
export declare const Inner: import("styled-components").StyledComponent<"label", any, InnerProps, never>;
interface WrapperProps extends WithChildrenProps {
    disabled?: boolean;
}
export declare const Wrapper: import("styled-components").StyledComponent<"label", any, WrapperProps, never>;
interface LabelProps extends WithChildrenProps {
    title?: string;
}
export declare const Label: import("styled-components").StyledComponent<"span", any, LabelProps, never>;
export {};
