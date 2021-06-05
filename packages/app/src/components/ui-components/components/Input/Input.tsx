import styled, { css } from 'styled-components';
import { config } from '../../../../styles/config';
import { WithExcludedChildrenProps } from '../../../../types';

type InputType = 'text' | 'password' | 'email' | 'number';

export interface InputProps extends WithExcludedChildrenProps {
  type?: InputType;
  disabled?: boolean;
  isInvalid?: boolean;
  placeholder?: string;
  min?: number;
  max?: number;
}

export const Input = styled.input<InputProps>`
  border: 1px solid ${config.color.secondary};
  border-radius: 4px;
  color: ${config.color.textColor};
  font-size: ${config.fontSize.normal};
  padding: 7px 12px;
  font-family: ${config.fontFamily.primary};
  outline: none;
  min-width: 0;
  transition: opacity 0.25s ease-in-out;
  ${(props: InputProps) =>
    props.isInvalid &&
    css`
      border-color: ${config.color.guardsmanRed};
    `};
  ${(props: InputProps) =>
    props.disabled &&
    css`
      opacity: ${config.opacity.disabled};
      background-color: transparent;
    `};
`;

Input.defaultProps = {
  type: 'text',
};
