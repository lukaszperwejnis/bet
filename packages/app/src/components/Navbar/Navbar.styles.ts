import styled from 'styled-components';
import { config } from '@bet/ui-components/dist/styles';

export const Root = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  padding: ${config.spacing.normal};
  color: ${config.color.black};

  & + & {
    margin-left: ${config.spacing.normal};
  }
`;
