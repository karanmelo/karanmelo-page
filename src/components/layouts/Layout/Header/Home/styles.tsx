import styled from 'styled-components';

export const NavHome = styled.a`
  display: flex;
  align-items: center;
  gap: 15px;

  color: inherit;
  font-size: 2rem;
  font-style: normal;
  font-weight: 900;
  opacity: 0.8;

  &::after {
    content: 'Karan Melo';
  }
`;

export const Logo = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  display: block;
`;
