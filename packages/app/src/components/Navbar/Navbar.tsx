import { ListItem, NavList, Root } from './Navbar.styles';
import { UserMenuDropdown } from '../UserMenuDropdown';

export const Navbar = (): JSX.Element => {
  return (
    <Root>
      <NavList>
        <ListItem>Dashboard</ListItem>
      </NavList>
      <UserMenuDropdown />
    </Root>
  );
};
