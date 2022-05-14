import styled from 'styled-components';

export const NavHome = styled.a`
  display: flex;
  align-items: center;
  gap: 15px;

  color: inherit;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 300;
  opacity: 0.8;

  &::after {
    content: 'Karan Melo';
  }
`;

export const Logo = styled.img`
  display: block;
  height: 4.8rem;
`;
