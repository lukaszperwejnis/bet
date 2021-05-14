import styled from 'styled-components';
import { stylesConfig } from '../../../../../styles/styles-config';
import { WithChildrenProps } from '@structures';

export const Error = styled.span<WithChildrenProps>`
  margin-top: ${stylesConfig.spacing.extraSmall};
  font-size: ${stylesConfig.fontSize.small};
  color: ${stylesConfig.color.guardsmanRed};
  font-family: ${stylesConfig.fontFamily.primary};
  letter-spacing: 0.2px;
`;
