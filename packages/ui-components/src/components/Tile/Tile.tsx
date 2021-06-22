import styled, { css } from "styled-components";
import { WithChildrenProps } from "../../types/index";
import { stylesConfig } from "../../styles/styles-config";

interface TileProps extends WithChildrenProps {
  isRound?: boolean;
}

export const Tile = styled.div<TileProps>`
  position: relative;
  overflow: hidden;
  background-color: ${stylesConfig.color.white};
  padding: ${stylesConfig.spacing.small};
  box-shadow: ${stylesConfig.boxShadow};
  ${(props: TileProps) =>
    props.isRound &&
    css`
      border-radius: 10px;
    `}
`;
