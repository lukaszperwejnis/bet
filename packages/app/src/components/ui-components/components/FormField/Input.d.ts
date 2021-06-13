import { RenderType, WithExcludedChildrenProps } from '@structures';
import { InputProps } from '../Input/Input';
interface FormFieldInputProps extends WithExcludedChildrenProps {
    name: string;
    label?: RenderType;
    description?: RenderType;
    errorMessage?: RenderType;
    wrapperClassName?: string;
    labelClassName?: string;
}
export declare const Input: ({ label, description, errorMessage, wrapperClassName, labelClassName, name, ...props }: FormFieldInputProps & InputProps) => JSX.Element;
export {};
