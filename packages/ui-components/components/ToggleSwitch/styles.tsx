import styled, { css } from "styled-components";
import { WithChildrenProps, WithExcludedChildrenProps } from "../../types";
import { stylesConfig } from "../../styles/styles-config";

export const CheckboxInput = styled.input<WithExcludedChildrenProps>`
  position: absolute;
  z-index: -1;
  opacity: 0;
`;

CheckboxInput.defaultProps = Object.freeze({
  type: "checkbox",
});

interface InnerProps extends WithExcludedChildrenProps {
  disabled?: boolean;
}

export const Inner = styled.label<InnerProps>`
  &:before {
    position: absolute;
    content: "";
    top: 0;
    display: block;
    width: 35px;
    height: 16px;
    background: ${stylesConfig.color.white};
    border: 1px solid ${stylesConfig.color.secondary};
    border-radius: 100px;
    will-change: background-color, border-color;
    transition-property: background-color, border-color;
    transition-duration: 350ms;
  }

  &:after {
    content: "";
    position: absolute;
    background: ${stylesConfig.color.secondary};
    border-radius: 100px;
    top: 3px;
    left: 4px;
    width: 12px;
    height: 12px;
    will-change: background-color, transform;
    transition-property: background-color, transform;
    transition-duration: 350ms;
  }

  ${({ disabled }: InnerProps) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: ${stylesConfig.opacity.disabled};
    `};
`;

export const Label = styled.span<WithChildrenProps>`
  font-size: ${stylesConfig.fontSize.normal};
  font-family: ${stylesConfig.fontFamily.primary};
  color: ${stylesConfig.color.textColor};
  padding-left: 45px;
  cursor: pointer;
`;

export const Root = styled.label<WithChildrenProps>`
  position: relative;
  display: flex;

  ${CheckboxInput}:checked ~ ${Inner}:before {
    background-color: ${stylesConfig.color.primary};
    border-color: ${stylesConfig.color.primary};
  }

  ${CheckboxInput}:checked ~ ${Inner}:after {
    background-color: ${stylesConfig.color.white};
    transform: translateX(100%);
    left: 10px;
  }
`;
