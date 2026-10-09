import styled from 'styled-components';

import { mediaQueries } from 'styles/mediaQueries';

export const Section = styled.section`
  width: 100%;

  padding: 4rem 2rem;

  display: flex;
  flex-direction: column;

  background-color: var(--background-theme);

  ${mediaQueries('sm')`
    padding: 4rem 6rem;
  `};
`;

export const Title = styled.h2`
  width: 100%;

  color: var(--color-violet);
  font-family: Poppins;
  font-size: 3.6rem;
  letter-spacing: 0.02em;
  text-align: center;
`;

export const Content = styled.div`
  flex: 1;

  margin-top: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;
