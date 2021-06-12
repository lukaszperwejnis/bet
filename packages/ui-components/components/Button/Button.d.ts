/// <reference types="@emotion/core" />
import { MouseEvent } from "react";
import { WithChildrenProps } from "../../types";
export declare enum ColorType {
    Primary = "primary",
    Secondary = "secondary",
    Error = "error",
    Warning = "warning",
    Success = "success",
    Empty = "empty"
}
declare type ButtonHtmlType = "submit" | "button";
interface ButtonProps extends WithChildrenProps {
    onClick?(event: MouseEvent): void;
    isHollow?: boolean;
    disabled?: boolean;
    isEmpty?: boolean;
    title?: string;
}
interface ButtonComponentProps extends ButtonProps {
    type?: ColorType;
    htmlType?: ButtonHtmlType;
}
export declare const Button: ({ type, htmlType, ...otherProps }: ButtonComponentProps) => JSX.Element;
export {};
