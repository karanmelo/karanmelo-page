import styled from 'styled-components';

import { mediaQueries } from 'styles/mediaQueries';

export const Container = styled.div`
  position: relative;
  margin: -60px 0 0;

  border-radius: 8px 8px 0 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  ${mediaQueries('sm')`
    padding: 0 8rem;
  `};

  ${mediaQueries('md')`
    padding: 0 10%;
  `};

  ${mediaQueries('lg')`
    padding: 0 20%;
  `};
`;
