import { WithChildrenProps } from '@structures';
import { StyledButton } from './styles';

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
  onClick?(event: React.MouseEvent): void;
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
