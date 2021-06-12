/// <reference types="@emotion/core" />
import { FormEvent } from "react";
import { RenderType } from "../../types";
declare type ToggleSwitchProps = {
    id?: string;
    name: string;
    label: RenderType;
    labelClassName?: string;
    value: string;
    checked?: boolean;
    onChange: (e: FormEvent<HTMLInputElement>) => void;
    onBlur: (e: FormEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    className?: string;
};
export declare const ToggleSwitch: ({ className, labelClassName, id, label, disabled, value, ...props }: ToggleSwitchProps) => JSX.Element;
export {};
