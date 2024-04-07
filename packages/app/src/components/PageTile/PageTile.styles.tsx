import styled, { css } from 'styled-components';
import { Tile } from '@bet/ui-components';
import { WithChildrenProps } from '@structures';
import { config } from '@styles';

type StyledTileProps = {
  isLoading?: boolean;
};

export const StyledTile = styled(Tile)<StyledTileProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  min-height: 300px;
  padding: ${config.spacing.big};
  font-family: ${config.fontFamily.primary};
  color: ${config.color.textColor};

  ${({ isLoading }: StyledTileProps) =>
    isLoading &&
    css`
      &:before {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        background-color: white;
        opacity: 0.8;
        z-index: 1;
      }
    `};
`;

export const Header = styled.h3<WithChildrenProps>`
  font-size: ${config.fontSize.large};
  margin-top: 0;
`;

export const Description = styled.div<WithChildrenProps>`
  width: 100%;
  text-align: center;
`;
