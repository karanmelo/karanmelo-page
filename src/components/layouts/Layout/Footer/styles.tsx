import styled from 'styled-components';

import { mediaQueries } from 'styles/mediaQueries';

export const Footer = styled.footer`
  position: absolute;
  width: 100%;
  height: 9rem;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: var(--color-violet);

  z-index: 10;

  & p {
    color: var(--font-color-white);
    font-size: 1.6rem;
  }

  ${mediaQueries('sm')`
    padding: 0 8rem;
  `};

  ${mediaQueries('md')`
    padding: 0 10%;
  `};

  ${mediaQueries('lg')`
    padding: 0 15%;
  `};
`;
