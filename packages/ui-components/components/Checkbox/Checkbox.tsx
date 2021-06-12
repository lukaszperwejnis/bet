import { FormEvent } from "react";
import { RenderType, WithExcludedChildrenProps } from "../../types";
import { Wrapper, CheckboxInput, Inner, Label } from "./styles";

interface CheckboxProps extends WithExcludedChildrenProps {
  id?: string;
  className?: string;
  labelClassName?: string;
  label: RenderType;
  value: string;
  checked?: boolean;
  name: string;
  disabled?: boolean;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
  onBlur?: (e: FormEvent<HTMLInputElement>) => void;
  title?: string;
}

export const Checkbox = ({
  label,
  disabled,
  checked,
  title,
  ...props
}: CheckboxProps): JSX.Element => (
  <Wrapper disabled={disabled}>
    <CheckboxInput disabled={disabled} checked={checked} {...props} />
    <Inner />
    <Label title={title}>{label}</Label>
  </Wrapper>
);
