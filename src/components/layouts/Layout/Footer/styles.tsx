import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  height: 9rem;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: var(--color-violet);

  z-index: 10;

  & p {
    font-size: 1.6rem;
  }
`;
