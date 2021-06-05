import styled, { css } from 'styled-components';
import { config } from '../styles/config';
export const Page = styled.div `
  height: 100vh;
  background-color: ${config.color.wildSand};
  ${(props) => props.centered &&
    css `
      display: flex;
      justify-content: center;
      align-items: center;
    `};
`;
