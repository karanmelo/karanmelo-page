import React from 'react';

import ThemeControl from '../ThemeControl';
import { NavMenu, NavItem, NavItemButton, Item } from './styles';

const Menu: React.FC = () => {
  return (
    <NavMenu>
      <NavItem>
        <Item href="#about">Sobre</Item>
      </NavItem>
      <NavItem>
        <Item href="#skills">Skills</Item>
      </NavItem>
      <NavItem>
        <Item href="#history">História</Item>
      </NavItem>
      <NavItemButton>
        <Item href="/contact">Contato</Item>
      </NavItemButton>
      <ThemeControl />
    </NavMenu>
  );
};

export default Menu;
