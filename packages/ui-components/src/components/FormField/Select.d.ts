import { RenderType, WithExcludedChildrenProps } from "../../types/index";
interface FormFieldSelectProps extends WithExcludedChildrenProps {
    name: string;
    disabled?: boolean;
    errorMessage?: string;
    description?: RenderType;
    error?: RenderType;
    wrapperClassName?: string;
    labelClassName?: string;
    placeholder: string;
    label: RenderType;
    options: {
        name: string;
        value: string;
    }[];
}
export declare const Select: ({ label, description, errorMessage, wrapperClassName, labelClassName, ...props }: FormFieldSelectProps) => JSX.Element;
export {};
