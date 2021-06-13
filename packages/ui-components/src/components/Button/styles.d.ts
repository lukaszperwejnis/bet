import { MouseEvent } from "react";
import { ColorType } from "./Button";
import { WithChildrenProps } from "../../types/index";
interface ButtonProps extends WithChildrenProps {
    onClick?(event: MouseEvent): void;
    isHollow?: boolean;
    disabled?: boolean;
    isEmpty?: boolean;
    title?: string;
}
interface StyledButtonProps extends ButtonProps {
    colorType: ColorType;
}
export declare const StyledButton: import("styled-components").StyledComponent<"button", any, StyledButtonProps, never>;
export {};
