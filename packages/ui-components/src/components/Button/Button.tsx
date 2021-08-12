import { MouseEvent } from 'react';
import { StyledButton } from './styles';
import { WithChildrenProps } from '../../types/index';

export enum ColorType {
  Primary = 'primary',
  Secondary = 'secondary',
  Error = 'error',
  Warning = 'warning',
  Success = 'success',
  Empty = 'empty',
}

type ButtonHtmlType = 'submit' | 'button';

interface ButtonProps extends WithChildrenProps {
  onClick?(event: MouseEvent): void;
  isHollow?: boolean;
  disabled?: boolean;
  isEmpty?: boolean;
  title?: string;
}

interface ButtonComponentProps extends ButtonProps {
  type?: ColorType;
  htmlType?: ButtonHtmlType;
}

export const Button = ({
  type = ColorType.Primary,
  htmlType = 'button',
  ...otherProps
}: ButtonComponentProps): JSX.Element => (
  <StyledButton type={htmlType} colorType={type} {...otherProps} />
);
