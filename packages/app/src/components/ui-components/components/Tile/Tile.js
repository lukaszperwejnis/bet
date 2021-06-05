import styled, { css } from 'styled-components';
import { config } from '../../../../styles/config';
export const Tile = styled.div `
  position: relative;
  overflow: hidden;
  background-color: ${config.color.white};
  padding: ${config.spacing.small};
  box-shadow: ${config.boxShadow};
  ${(props) => props.isRound &&
    css `
      border-radius: 10px;
    `}
`;
