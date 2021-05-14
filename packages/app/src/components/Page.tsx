import styled, { css } from 'styled-components';
import { RenderType } from '@structures';
import { stylesConfig } from '../styles/styles-config';

interface PageProps {
  children: RenderType;
  centered?: boolean;
}

export const Page = styled.div<PageProps>`
  height: 100vh;
  background-color: ${stylesConfig.color.wildSand};
  ${(props: PageProps) =>
    props.centered &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `};
`;
