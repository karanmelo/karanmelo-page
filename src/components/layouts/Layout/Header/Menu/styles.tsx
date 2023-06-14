import styled from 'styled-components';

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.6em;
`;

export const NavItem = styled.li`
  color: inherit;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 300;
  opacity: 0.8;

  transition: 0.2s linear all;

  &:hover:not(:last-child) {
    border-bottom: 4px solid var(--color-violet);

    & > a {
      font-weight: 900 !important;
    }
  }
`;

export const NavItemButton = styled.li`
  width: 8rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-violet);
  border-radius: 20px;

  font-size: 1.8rem;
  font-style: normal;

  cursor: pointer;

  transition: 0.2s linear all;

  & a {
    color: var(--font-color-white);
  }

  &:hover {
    box-shadow: 2px 2px 8px -4px black;
  }
`;

export const Item = styled.a`
  color: inherit;
`;
