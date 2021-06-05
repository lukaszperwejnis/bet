import styled from 'styled-components';
import { WithChildrenProps } from '@structures';
import { config } from '@styles';

export const Error = styled.span<WithChildrenProps>`
  margin-top: ${config.spacing.extraSmall};
  font-size: ${config.fontSize.small};
  color: ${config.color.guardsmanRed};
  font-family: ${config.fontFamily.primary};
  letter-spacing: 0.2px;
  text-align: left;
`;
