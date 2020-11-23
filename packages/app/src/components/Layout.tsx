import styled from 'styled-components';
import {WithChildrenProps} from '../types';
import {device} from '../styles/breakpoints';

export const Layout = styled.main<WithChildrenProps>`
    @media ${device.tabletOnly} {
        margin-left: 200px;
    }

    @media ${device.desktopUp} {
        margin-left: 275px;
    }
`;
