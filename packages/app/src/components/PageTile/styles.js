import styled from 'styled-components';
import { config } from '../../styles/config';
import { Tile } from '../ui-components/components';
export const StyledTile = styled(Tile) `
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  min-height: 300px;
  padding: ${config.spacing.big};
  justify-content: center;
`;
export const Header = styled.h3 `
  font-size: ${config.fontSize.large};
  font-family: ${config.fontFamily.primary};
  margin-top: 0;
  color: ${config.color.textColor};
`;
