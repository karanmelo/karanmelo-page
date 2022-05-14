import React from 'react';

import ThemeControl from '../ThemeControl';
import { NavMenu, NavItem, NavItemButton, Item } from './styles';

const Menu: React.FC = () => {
  return (
    <NavMenu>
      <NavItem>
        <Item href="/">Blog</Item>
      </NavItem>
      <NavItemButton>
        <Item href="/">Sobre</Item>
      </NavItemButton>
      <ThemeControl />
    </NavMenu>
  );
};

export default Menu;
