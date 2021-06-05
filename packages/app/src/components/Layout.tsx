import styled from 'styled-components';
import { WithChildrenProps } from '@structures';
import { breakpoints } from '../styles/breakpoints';

export const Layout = styled.main<WithChildrenProps>`
  @media ${breakpoints.tabletOnly} {
    margin-left: 200px;
  }

  @media ${breakpoints.desktopUp} {
    margin-left: 275px;
  }
`;
