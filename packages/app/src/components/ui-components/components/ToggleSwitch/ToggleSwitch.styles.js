import styled, { css } from 'styled-components';
import { config } from '../../../../styles/config';
export const CheckboxInput = styled.input `
  position: absolute;
  z-index: -1;
  opacity: 0;
`;
CheckboxInput.defaultProps = Object.freeze({
    type: 'checkbox',
});
export const Inner = styled.label `
  &:before {
    position: absolute;
    content: '';
    top: 0;
    display: block;
    width: 35px;
    height: 16px;
    background: ${config.color.white};
    border: 1px solid ${config.color.secondary};
    border-radius: 100px;
    will-change: background-color, border-color;
    transition-property: background-color, border-color;
    transition-duration: 350ms;
  }

  &:after {
    content: '';
    position: absolute;
    background: ${config.color.secondary};
    border-radius: 100px;
    top: 3px;
    left: 4px;
    width: 12px;
    height: 12px;
    will-change: background-color, transform;
    transition-property: background-color, transform;
    transition-duration: 350ms;
  }

  ${({ disabled }) => disabled &&
    css `
      cursor: not-allowed;
      opacity: ${config.opacity.disabled};
    `};
`;
export const Label = styled.span `
  font-size: ${config.fontSize.normal};
  font-family: ${config.fontFamily.primary};
  color: ${config.color.textColor};
  padding-left: 45px;
  cursor: pointer;
`;
export const Root = styled.label `
  position: relative;
  display: flex;

  ${CheckboxInput}:checked ~ ${Inner}:before {
    background-color: ${config.color.primary};
    border-color: ${config.color.primary};
  }

  ${CheckboxInput}:checked ~ ${Inner}:after {
    background-color: ${config.color.white};
    transform: translateX(100%);
    left: 10px;
  }
`;
