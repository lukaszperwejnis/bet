import styled, { css } from 'styled-components';
import { WithChildrenProps } from '@structures';
import { config } from '../../../../styles/config';

interface TileProps extends WithChildrenProps {
  isRound?: boolean;
}

export const Tile = styled.div<TileProps>`
  position: relative;
  overflow: hidden;
  background-color: ${config.color.white};
  padding: ${config.spacing.small};
  box-shadow: ${config.boxShadow};
  ${(props: TileProps) =>
    props.isRound &&
    css`
      border-radius: 10px;
    `}
`;
