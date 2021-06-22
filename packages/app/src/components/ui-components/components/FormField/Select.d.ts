import { RenderType, WithExcludedChildrenProps } from '@structures';
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
export declare const Select: ({ label, description, errorMessage, wrapperClassName, labelClassName, name, ...props }: FormFieldSelectProps) => JSX.Element;
export {};
