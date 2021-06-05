import styled, { css } from 'styled-components';
import { WithChildrenProps, WithExcludedChildrenProps } from '@structures';
import { config } from '../../../../styles/config';
import { truncate } from '../../../../styles/mixins';

export const CheckboxInput = styled.input<WithExcludedChildrenProps>`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;

CheckboxInput.defaultProps = {
  type: 'checkbox',
};

interface InnerProps extends WithExcludedChildrenProps {
  disabled?: boolean;
}

export const Inner = styled.label<InnerProps>`
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    display: block;
    left: 0;
    width: 16px;
    height: 16px;
    background-color: ${config.color.white};
    border: 1px solid ${config.color.secondary};
    user-select: none;
    border-radius: 2px;
    pointer-events: all;
    transition-property: background-image, background-color, border-color,
      box-shadow;
    transition-duration: 0.25s;
    transition-timing-function: cubic-bezier(0.27, 0.01, 0.38, 1.06);
  }

  ${CheckboxInput}:checked ~ &:before {
    background-image: none;
    background-color: ${config.color.primary};
    color: ${config.color.white};
    border-color: transparent;
    box-shadow: none;
  }

  &:after {
    content: '';
    position: absolute;
    display: block;
    left: 6px;
    width: 5px;
    height: 11px;
    opacity: 0;
    transform: rotate(45deg) scale(0);
    border-right: 2px solid ${config.color.white};
    border-bottom: 2px solid ${config.color.white};
    transition: transform 0.25s cubic-bezier(0.27, 0.01, 0.38, 1.06);
    background-size: 50% 50%;
    background-repeat: no-repeat;
    background-position: 50%;
  }

  ${CheckboxInput}:checked ~ &:after {
    opacity: 1;
    -webkit-transform: rotate(45deg) scale(1);
    transform: rotate(45deg) scale(1);
    background-image: none;
  }
`;

interface WrapperProps extends WithChildrenProps {
  disabled?: boolean;
}

export const Wrapper = styled.label<WrapperProps>`
  position: relative;
  display: flex;
  height: 18px;
  transition: opacity 0.25s ease-in-out;
  cursor: pointer;

  ${({ disabled }: WrapperProps) =>
    disabled &&
    css`
      opacity: ${config.opacity.disabled};
      cursor: not-allowed;
      ${Inner} {
        cursor: not-allowed;
      }
    `}

  & + & {
    margin-top: ${config.spacing.small};
  }
`;

interface LabelProps extends WithChildrenProps {
  title?: string;
}

export const Label = styled.span<LabelProps>`
  font-family: ${config.fontFamily.primary};
  color: ${config.color.textColor};
  font-size: ${config.fontSize.normal};
  ${truncate}
`;
