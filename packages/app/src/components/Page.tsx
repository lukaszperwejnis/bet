import styled, { css } from 'styled-components';
import { RenderType } from '@structures';
import { config } from '@styles';

interface PageProps {
  children: RenderType;
  centered?: boolean;
}

export const Page = styled.div<PageProps>`
  min-height: 100vh;
  background-color: ${config.color.wildSand};
  ${(props: PageProps) =>
    props.centered &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `};
`;
