import { FormEvent } from "react";
import { RenderType } from "../../types/index";
import { CheckboxInput, Inner, Label, Root } from "./styles";

type ToggleSwitchProps = {
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

const fieldId = `switch__${Math.random()}`;

export const ToggleSwitch = ({
  className,
  labelClassName,
  id,
  label,
  disabled,
  value,
  ...props
}: ToggleSwitchProps): JSX.Element => (
  <Root className={className}>
    <CheckboxInput
      id={id || fieldId}
      disabled={disabled}
      value={value as string}
      {...props}
    />
    <Inner id={id || fieldId} disabled={disabled} />
    <Label className={labelClassName}>{label}</Label>
  </Root>
);
