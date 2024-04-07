import { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './Button.styles';

export enum Variant {
  Primary = 'primary',
  Secondary = 'secondary',
  Error = 'error',
  Warning = 'warning',
  Success = 'success',
  Empty = 'empty',
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<{
    variant: Variant;
    isEmpty: boolean;
    isHollow: boolean;
  }>;

export const Button = ({
  variant = Variant.Primary,
  ...buttonProps
}: ButtonProps): JSX.Element => (
  <StyledButton variant={variant} {...buttonProps} />
);
