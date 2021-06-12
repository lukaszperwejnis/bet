import styled, { css } from "styled-components";
import { WithChildrenProps, WithExcludedChildrenProps } from "../../types";
import { stylesConfig } from "../../styles/styles-config";

export const RadioInput = styled.input<WithExcludedChildrenProps>`
  position: absolute;
  left: 0;
  z-index: 1;
  cursor: pointer;
  opacity: 0;
  top: 0;
  bottom: 0;
  right: 0;
  overflow: visible;
`;

RadioInput.defaultProps = {
  type: "radio",
};

interface WrapperProps extends WithChildrenProps {
  disabled?: boolean;
}

export const Wrapper = styled.label<WrapperProps>`
  display: flex;
  align-items: center;
  cursor: pointer;

  ${(props: WrapperProps) =>
    props.disabled &&
    css`
      opacity: ${stylesConfig.opacity.disabled};
      cursor: not-allowed;
      ${RadioInput} {
        cursor: not-allowed;
      }
    `}
`;

export const Radio = styled.span<WithChildrenProps>`
  position: relative;
  font-size: ${stylesConfig.fontSize.normal};
`;

interface InnerProps extends WithExcludedChildrenProps {
  checked?: boolean;
}

export const Inner = styled.span<InnerProps>`
  position: relative;
  top: 0;
  left: 0;
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 100%;
  background: ${stylesConfig.color.white};
  border: 1px solid ${stylesConfig.color.secondary};

  ${(props: InnerProps) =>
    props.checked &&
    css`
      &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background-color: ${stylesConfig.color.primary};
        border-radius: 50%;
      }

      &:after {
        position: absolute;
        width: 10px;
        height: 10px;
        left: 4px;
        top: 4px;
        border-radius: 100%;
        display: table;
        content: "";
        background-color: ${stylesConfig.color.white};
      }
    `}
`;

interface LabelProps extends WithChildrenProps {
  checked?: boolean;
}

export const Label = styled.span<LabelProps>`
  font-family: ${stylesConfig.fontFamily.primary};
  color: ${stylesConfig.color.textColor};
  margin-left: ${stylesConfig.spacing.small};
  font-size: ${stylesConfig.fontSize.small};
`;
