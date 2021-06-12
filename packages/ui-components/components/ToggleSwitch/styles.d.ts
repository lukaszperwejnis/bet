import { WithChildrenProps, WithExcludedChildrenProps } from "../../types";
export declare const CheckboxInput: import("styled-components").StyledComponent<"input", any, WithExcludedChildrenProps, never>;
interface InnerProps extends WithExcludedChildrenProps {
    disabled?: boolean;
}
export declare const Inner: import("styled-components").StyledComponent<"label", any, InnerProps, never>;
export declare const Label: import("styled-components").StyledComponent<"span", any, WithChildrenProps, never>;
export declare const Root: import("styled-components").StyledComponent<"label", any, WithChildrenProps, never>;
export {};
