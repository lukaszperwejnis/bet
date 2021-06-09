import React, { ReactElement } from "react";
import { CheckboxInput, Inner, Label, Root } from "./ToggleSwitch.styles";
import { RenderType } from "../../types";

type ToggleSwitchProps = {
  id?: string;
  name: string;
  label: RenderType;
  labelClassName?: string;
  value: string | boolean;
  checked?: boolean;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FormEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
};

const fieldId = `switch__${Math.random()}`;

export const ToggleSwitch = ({
  className,
  labelClassName,
  id,
  label,
  disabled,
  value,
  ...props
}: ToggleSwitchProps): ReactElement => {
  return (
    <Root className={className}>
      <CheckboxInput
        name={name}
        id={id || fieldId}
        disabled={disabled}
        value={value as string}
        {...props}
      />
      <Inner id={id || fieldId} disabled={disabled} />
      <Label className={labelClassName}>{label}</Label>
    </Root>
  );
};
