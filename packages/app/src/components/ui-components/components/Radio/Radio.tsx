import { FormEvent } from 'react';
import { RenderType, WithExcludedChildrenProps } from '@structures';
import {
  Wrapper,
  Radio as RadioComponent,
  RadioInput,
  Inner,
  Label,
} from './Radio.styles';

export interface RadioProps extends WithExcludedChildrenProps {
  id?: string;
  className?: string;
  labelClassName?: string;
  label: RenderType;
  value: string | number;
  checked?: boolean;
  name: string;
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
}: RadioProps): JSX.Element => {
  return (
    <Wrapper disabled={Boolean(disabled)}>
      <RadioComponent className={className}>
        <RadioInput checked={checked} disabled={disabled} {...otherProps} />
        <Inner checked={Boolean(checked)} />
      </RadioComponent>
      <Label
        data-radio-role="label"
        className={labelClassName}
        checked={Boolean(checked)}
      >
        {label}
      </Label>
    </Wrapper>
  );
};
