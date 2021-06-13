import { RenderType, WithExcludedChildrenProps } from '@structures';
interface FormFieldCheckboxProps extends WithExcludedChildrenProps {
    name: string;
    label: RenderType;
    checked: boolean;
    disabled?: boolean;
    wrapperClassName?: string;
    labelClassName?: string;
}
export declare const Checkbox: ({ label, checked, wrapperClassName, name, ...props }: FormFieldCheckboxProps) => JSX.Element;
export {};
