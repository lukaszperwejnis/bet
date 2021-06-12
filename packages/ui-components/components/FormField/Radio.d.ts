/// <reference types="react" />
/// <reference types="@emotion/core" />
import { RenderType, WithExcludedChildrenProps } from "../../types";
interface FormFieldRadioProps extends WithExcludedChildrenProps {
    name: string;
    label: RenderType;
    valueToSet: string | number;
    disabled?: boolean;
    errorMessage?: string;
    description?: RenderType;
    error?: RenderType;
    wrapperClassName?: string;
    labelClassName?: string;
}
export declare const Radio: ({ label, description, valueToSet, errorMessage, wrapperClassName, ...props }: FormFieldRadioProps) => JSX.Element;
export {};
