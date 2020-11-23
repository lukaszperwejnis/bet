import {Tile} from '../ui-components/components';
import styled from 'styled-components';
import {WithChildrenProps} from '../../types';

export const StyledTile = styled(Tile)<WithChildrenProps>`
    width: 300px;
    height: 300px;
`;
