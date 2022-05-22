import styled from 'styled-components';

import { mediaQueries } from 'styles/mediaQueries';

export const Container = styled.div`
  position: relative;
  margin: -60px 0 0;

  display: flex;
  flex-direction: column;

  & > section:first-child {
    border-radius: 8px 8px 0 0;
    overflow: hidden;
  }

  & > section:nth-child(odd) {
    min-height: 520px;

    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
    z-index: 1;
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
