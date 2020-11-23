import React from 'react';
import styled, {css} from 'styled-components';
import {stylesConfig} from '../styles/styles-config';

interface PageProps {
    children: React.ReactNode;
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
