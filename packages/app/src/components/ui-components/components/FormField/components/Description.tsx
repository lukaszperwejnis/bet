import styled from 'styled-components';
import { WithChildrenProps } from '@structures';
import { config } from '@styles';

export const Description = styled.span<WithChildrenProps>`
  color: ${config.color.textColor};
  font-size: ${config.fontSize.small};
  margin: ${config.spacing.small} 0;
  font-family: ${config.fontFamily.primary};
  letter-spacing: 0.2px;
`;
