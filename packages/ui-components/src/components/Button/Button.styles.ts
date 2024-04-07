import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import { ButtonProps, Variant } from './Button';
import { breakpoints, config } from '../../styles';

export const StyledButton = styled.button<ButtonProps>`
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

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: ${config.opacity.disabled};
      cursor: auto;
    `};

  // Primary variant
  ${({ variant }) =>
    variant === Variant.Primary &&
    css`
      background-color: ${config.color.primary};
      &:hover {
        background-color: ${lighten(0.1, config.color.primary)};
      }
    `};

  ${({ variant, isHollow }) =>
    variant === Variant.Primary &&
    isHollow &&
    css`
      color: ${config.color.primary};
      border-color: ${config.color.primary};
      &:hover {
        background-color: ${config.color.primary};
      }
    `};

  // Secondary variant
  ${({ variant }) =>
    variant === Variant.Secondary &&
    css`
      color: ${config.color.textColor};
      background-color: ${config.color.secondary};
      &:hover {
        background-color: ${darken(0.1, config.color.secondary)};
      }
    `};

  ${({ variant, isHollow }) =>
    variant === Variant.Secondary &&
    isHollow &&
    css`
      color: ${config.color.secondary};
      border-color: ${config.color.secondary};
      &:hover {
        background-color: ${config.color.secondary};
      }
    `};

  // Error variant
  ${({ variant }) =>
    variant === Variant.Error &&
    css`
      background-color: ${config.color.guardsmanRed};
      &:hover {
        background-color: ${lighten(0.1, config.color.guardsmanRed)};
      }
    `};

  ${({ variant, isHollow }) =>
    variant === Variant.Error &&
    isHollow &&
    css`
      color: ${config.color.guardsmanRed};
      border-color: ${config.color.guardsmanRed};
      &:hover {
        background-color: ${config.color.guardsmanRed};
      }
    `};

  // Warning variant
  ${({ variant }) =>
    variant === Variant.Warning &&
    css`
      background-color: ${config.color.warning};
      &:hover {
        background-color: ${lighten(0.1, config.color.warning)};
      }
    `};

  ${({ variant, isHollow }) =>
    variant === Variant.Error &&
    isHollow &&
    css`
      color: ${config.color.warning};
      border-color: ${config.color.warning};
      &:hover {
        background-color: ${config.color.warning};
      }
    `};

  // Success variant
  ${({ variant }) =>
    variant === Variant.Success &&
    css`
      background-color: ${config.color.success};
      &:hover {
        background-color: ${lighten(0.1, config.color.success)};
      }
    `};

  ${({ variant, isHollow }) =>
    variant === Variant.Success &&
    isHollow &&
    css`
      color: ${config.color.success};
      border-color: ${config.color.success};
      &:hover {
        background-color: ${config.color.success};
      }
    `};

  // Empty variant
  ${({ variant }) =>
    variant === Variant.Empty &&
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

  ${({ isHollow }) =>
    isHollow &&
    css`
      background-color: ${config.color.white};
      border: 1px solid;
      &:hover {
        color: ${config.color.white};
      }
    `};
`;
