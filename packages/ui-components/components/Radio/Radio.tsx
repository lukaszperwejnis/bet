import { FormEvent } from "react";
import { RenderType, WithExcludedChildrenProps } from "../../types";
import {
  Wrapper,
  Radio as RadioComponent,
  RadioInput,
  Inner,
  Label,
} from "./styles";

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

export const Radio = ({
  className,
  labelClassName,
  label,
  checked,
  disabled,
  ...otherProps
}: RadioProps): JSX.Element => (
  <Wrapper disabled={disabled}>
    <RadioComponent className={className}>
      <RadioInput checked={checked} disabled={disabled} {...otherProps} />
      <Inner checked={checked} />
    </RadioComponent>
    <Label data-radio-role="label" className={labelClassName} checked={checked}>
      {label}
    </Label>
  </Wrapper>
);
