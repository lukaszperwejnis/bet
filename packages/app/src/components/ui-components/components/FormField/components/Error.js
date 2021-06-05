import styled from 'styled-components';
import { config } from '../../../../../styles/config';
export const Error = styled.span `
  margin-top: ${config.spacing.extraSmall};
  font-size: ${config.fontSize.small};
  color: ${config.color.guardsmanRed};
  font-family: ${config.fontFamily.primary};
  letter-spacing: 0.2px;
`;
