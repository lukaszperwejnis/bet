import React, { useState } from 'react';
import styled from 'styled-components';
import { config } from '@bet/ui-components/dist/styles';

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
`;

const MobileButton = styled.button`
  display: block;
  background: none;
  border: none;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const DesktopMenu = styled.ul`
  list-style: none;
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const MenuItem = styled.li`
  margin-left: ${config.spacing.normal};
  cursor: pointer;
  color: ${config.color.textColor};
  font-size: ${config.fontSize.normal};
`;

export const UserMenuDropdown: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <NavContainer>
      <MobileButton onClick={toggleMenu}>
        <span className="mobile-menu-icon">☰</span>
      </MobileButton>
      <DesktopMenu style={{ display: menuVisible ? 'flex' : 'none' }}>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Logout</MenuItem>
      </DesktopMenu>
    </NavContainer>
  );
};
