/// <reference types="react" />
/// <reference types="@emotion/core" />
import { InputProps } from "../Input/Input";
import { RenderType, WithExcludedChildrenProps } from "../../types/index";
interface FormFieldInputProps extends WithExcludedChildrenProps {
    name: string;
    label?: RenderType;
    description?: RenderType;
    errorMessage?: RenderType;
    wrapperClassName?: string;
    labelClassName?: string;
}
export declare const Input: {
    ({ label, description, errorMessage, wrapperClassName, labelClassName, ...props }: FormFieldInputProps & InputProps): JSX.Element;
    defaultProps: {
        type: string;
    };
};
export {};
