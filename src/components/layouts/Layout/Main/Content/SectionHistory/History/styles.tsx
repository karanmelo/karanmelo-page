import styled from 'styled-components';

import { mediaQueries } from 'styles/mediaQueries';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 4rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${mediaQueries('sm')`
    padding: 4rem 6rem;
  `};

  ${mediaQueries('md')`
    padding: 4rem 10rem;
  `};

  ${mediaQueries('lg')`
    padding: 4rem 18rem;
  `};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 900px;
`;

export const Timeline = styled.ol`
  list-style: none;
`;
