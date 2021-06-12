import styled from 'styled-components';
import { config } from '@styles';
export const Label = styled.label `
  margin-bottom: ${config.spacing.small};
  font-size: ${config.fontSize.normal};
  color: ${config.color.textColor};
  font-weight: ${config.fontWeight.bold};
  font-family: ${config.fontFamily.primary};
  letter-spacing: 0.2px;
`;
