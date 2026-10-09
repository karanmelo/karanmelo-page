import React from 'react';

import { useActiveSection } from 'hooks';

import ThemeControl from '../ThemeControl';
import { NavMenu, NavItem, Item } from './styles';

const SECTION_IDS = ['about', 'history', 'hard-skills', 'soft-skills'];

const Menu: React.FC = () => {
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <NavMenu>
      <NavItem $active={activeSection === 'about'}>
        <Item href="#about">Sobre</Item>
      </NavItem>
      <NavItem $active={activeSection === 'history'}>
        <Item href="#history">Experiência</Item>
      </NavItem>
      <NavItem $active={activeSection === 'hard-skills'}>
        <Item href="#hard-skills">Hard Skills</Item>
      </NavItem>
      <NavItem $active={activeSection === 'soft-skills'}>
        <Item href="#soft-skills">Soft Skills</Item>
      </NavItem>
      <NavItem>
        <ThemeControl />
      </NavItem>
    </NavMenu>
  );
};

export default Menu;
