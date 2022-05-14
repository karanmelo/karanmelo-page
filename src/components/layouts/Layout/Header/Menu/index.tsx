import React from 'react';

import ThemeControl from '../ThemeControl';
import { NavMenu, NavItem, NavItemButton } from './styles';

const Menu: React.FC = () => {
  return (
    <NavMenu>
      <NavItem>
        <a href="/">Blog</a>
      </NavItem>
      <NavItemButton>
        <a href="/">Sobre</a>
      </NavItemButton>
      <ThemeControl />
    </NavMenu>
  );
};

export default Menu;
