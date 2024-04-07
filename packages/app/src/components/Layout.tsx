import styled from 'styled-components';
import { WithChildrenProps } from '@structures';
import { config } from '@styles';
import { breakpoints } from '../styles/breakpoints';

export const Layout = styled.main<WithChildrenProps>`
  background-color: ${config.color.wildSand};
  padding: ${config.spacing.normal};

  // @media ${breakpoints.tabletOnly} {
  //   margin-left: 200px;
  // }
  //
  // @media ${breakpoints.desktopUp} {
  //   margin-left: 275px;
  // }
`;
