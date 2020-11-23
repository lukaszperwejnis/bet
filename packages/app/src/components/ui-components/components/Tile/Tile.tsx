import styled, {css} from 'styled-components';
import {stylesConfig} from '../../../../styles/styles-config';
import {WithChildrenProps} from '../../../../types';

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
