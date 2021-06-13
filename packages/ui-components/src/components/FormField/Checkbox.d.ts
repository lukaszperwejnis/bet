/// <reference types="react" />
/// <reference types="@emotion/core" />
import { RenderType, WithExcludedChildrenProps } from "../../types/index";
interface FormFieldCheckboxProps extends WithExcludedChildrenProps {
    name: string;
    label: RenderType;
    checked: boolean;
    disabled?: boolean;
    wrapperClassName?: string;
    labelClassName?: string;
}
export declare const Checkbox: ({ label, checked, wrapperClassName, ...props }: FormFieldCheckboxProps) => JSX.Element;
export {};
