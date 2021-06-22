import { WithChildrenProps, WithExcludedChildrenProps } from "../../types/index";
export declare const RadioInput: import("styled-components").StyledComponent<"input", any, WithExcludedChildrenProps, never>;
interface WrapperProps extends WithChildrenProps {
    disabled?: boolean;
}
export declare const Wrapper: import("styled-components").StyledComponent<"label", any, WrapperProps, never>;
export declare const Radio: import("styled-components").StyledComponent<"span", any, WithChildrenProps, never>;
interface InnerProps extends WithExcludedChildrenProps {
    checked?: boolean;
}
export declare const Inner: import("styled-components").StyledComponent<"span", any, InnerProps, never>;
interface LabelProps extends WithChildrenProps {
    checked?: boolean;
}
export declare const Label: import("styled-components").StyledComponent<"span", any, LabelProps, never>;
export {};
