import styled from 'styled-components';

import { mediaQueries } from 'styles/mediaQueries';

export const Container = styled.div`
  width: 100%;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 15px;

  font-size: 2rem;

  ${mediaQueries('md')`
    flex: 1 1 0%;
    min-width: 0;
  `};
`;
