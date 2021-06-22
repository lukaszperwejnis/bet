import { RenderType, WithExcludedChildrenProps } from '@structures';
interface ToggleSwitchProps extends WithExcludedChildrenProps {
    name: string;
    label: RenderType;
    valueToSet: string | boolean;
    disabled?: boolean;
    errorMessage?: string;
    description?: RenderType;
    error?: RenderType;
    wrapperClassName?: string;
    labelClassName?: string;
}
export declare const ToggleSwitch: ({ label, description, valueToSet, errorMessage, wrapperClassName, name, ...props }: ToggleSwitchProps) => JSX.Element;
export {};
