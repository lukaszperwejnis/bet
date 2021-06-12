import { MouseEvent } from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";
import { ColorType } from "./Button";
import { breakpoints, config } from "../../styles";
import { WithChildrenProps } from "../../types";

interface ButtonProps extends WithChildrenProps {
  onClick?(event: MouseEvent): void;
  isHollow?: boolean;
  disabled?: boolean;
  isEmpty?: boolean;
  title?: string;
}

interface StyledButtonProps extends ButtonProps {
  colorType: ColorType;
}

export const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  border-radius: 4px;
  color: ${config.color.white};
  font-size: ${config.fontSize.small};
  padding: ${config.spacing.small};
  transition-property: background-color, border, color, opacity;
  transition-duration: 0.25s;
  transition-timing-function: cubic-bezier(0.27, 0.01, 0.38, 1.06);
  will-change: background-color, border, color, opacity;
  font-family: ${config.fontFamily.primary};
  cursor: pointer;

  &:active,
  &:focus {
    outline: none;
  }

  @media ${breakpoints.tabletUp} {
    font-size: ${config.fontSize.normal};
  }

  ${({ disabled }: StyledButtonProps) =>
    disabled &&
    css`
      opacity: ${config.opacity.disabled};
      cursor: auto;
    `};

  ${({ colorType }: StyledButtonProps) =>
    colorType === "primary" &&
    css`
      background-color: ${config.color.primary};
      &:hover {
        background-color: ${lighten(0.1, config.color.primary)};
      }
    `};

  ${({ colorType, isHollow }: StyledButtonProps) =>
    colorType === "primary" &&
    isHollow &&
    css`
      color: ${config.color.primary};
      border-color: ${config.color.primary};
      &:hover {
        background-color: ${config.color.primary};
      }
    `};
  ${({ colorType }: StyledButtonProps) =>
    colorType === "secondary" &&
    css`
      color: ${config.color.textColor};
      background-color: ${config.color.secondary};
      &:hover {
        background-color: ${darken(0.1, config.color.secondary)};
      }
    `};

  ${({ colorType, isHollow }: StyledButtonProps) =>
    colorType === "secondary" &&
    isHollow &&
    css`
      color: ${config.color.secondary};
      border-color: ${config.color.secondary};
      &:hover {
        background-color: ${config.color.secondary};
      }
    `};
  ${({ colorType }: StyledButtonProps) =>
    colorType === "error" &&
    css`
      background-color: ${config.color.guardsmanRed};
      &:hover {
        background-color: ${lighten(0.1, config.color.guardsmanRed)};
      }
    `};

  ${({ colorType, isHollow }: StyledButtonProps) =>
    colorType === "error" &&
    isHollow &&
    css`
      color: ${config.color.guardsmanRed};
      border-color: ${config.color.guardsmanRed};
      &:hover {
        background-color: ${config.color.guardsmanRed};
      }
    `};

  ${({ colorType }: StyledButtonProps) =>
    colorType === "warning" &&
    css`
      background-color: ${config.color.warning};
      &:hover {
        background-color: ${lighten(0.1, config.color.warning)};
      }
    `};

  ${({ colorType, isHollow }: StyledButtonProps) =>
    colorType === "warning" &&
    isHollow &&
    css`
      color: ${config.color.warning};
      border-color: ${config.color.warning};
      &:hover {
        background-color: ${config.color.warning};
      }
    `};

  ${({ colorType }: StyledButtonProps) =>
    colorType === "success" &&
    css`
      background-color: ${config.color.success};
      &:hover {
        background-color: ${lighten(0.1, config.color.success)};
      }
    `};

  ${({ colorType, isHollow }: StyledButtonProps) =>
    colorType === "success" &&
    isHollow &&
    css`
      color: ${config.color.success};
      border-color: ${config.color.success};
      &:hover {
        background-color: ${config.color.success};
      }
    `};

  ${({ colorType }: StyledButtonProps) =>
    colorType === "empty" &&
    css`
      margin: 0;
      background: none;
      padding: 0;
      min-width: auto;

      &:hover {
        background: none;
        opacity: 0.7;
      }
    `};

  ${({ isHollow }: ButtonProps) =>
    isHollow &&
    css`
      background-color: ${config.color.white};
      border: 1px solid;
      &:hover {
        color: ${config.color.white};
      }
    `};
`;
