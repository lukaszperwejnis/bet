/// <reference types="@emotion/core" />
import { FormEvent } from "react";
import { RenderType, WithExcludedChildrenProps } from "../../types/index";
export interface RadioProps extends WithExcludedChildrenProps {
    name: string;
    label: RenderType;
    value: string | number;
    id?: string;
    className?: string;
    labelClassName?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange: (e: FormEvent<HTMLInputElement>) => void;
    onBlur?: (e: FormEvent<HTMLInputElement>) => void;
}
export declare const Radio: ({ className, labelClassName, label, checked, disabled, ...otherProps }: RadioProps) => JSX.Element;
