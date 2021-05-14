import styled from 'styled-components';
import { WithChildrenProps } from '@structures';
import { stylesConfig } from '../../styles/styles-config';
import { Tile } from '../ui-components/components';

export const StyledTile = styled(Tile)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  min-height: 300px;
  padding: ${stylesConfig.spacing.big};
  justify-content: center;
`;

export const Header = styled.h3<WithChildrenProps>`
  font-size: ${stylesConfig.fontSize.large};
  font-family: ${stylesConfig.fontFamily.primary};
  margin-top: 0;
  color: ${stylesConfig.color.textColor};
`;
