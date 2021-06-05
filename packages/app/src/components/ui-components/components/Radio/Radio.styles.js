import styled, { css } from 'styled-components';
import { config } from '../../../../styles/config';
export const RadioInput = styled.input `
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
    type: 'radio',
};
export const Wrapper = styled.label `
  display: flex;
  align-items: center;
  cursor: pointer;

  ${(props) => props.disabled &&
    css `
      opacity: ${config.opacity.disabled};
      cursor: not-allowed;
      ${RadioInput} {
        cursor: not-allowed;
      }
    `}
`;
export const Radio = styled.span `
  position: relative;
  font-size: ${config.fontSize.normal};
`;
export const Inner = styled.span `
  position: relative;
  top: 0;
  left: 0;
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 100%;
  background: ${config.color.white};
  border: 1px solid ${config.color.secondary};

  ${(props) => props.checked &&
    css `
      &:before {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        background-color: ${config.color.primary};
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
        content: '';
        background-color: ${config.color.white};
      }
    `}
`;
export const Label = styled.span `
  font-family: ${config.fontFamily.primary};
  color: ${config.color.textColor};
  margin-left: ${config.spacing.small};
  font-size: ${config.fontSize.small};
`;
