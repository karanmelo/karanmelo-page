import styled from 'styled-components';

import { mediaQueries } from 'styles/mediaQueries';

export const Section = styled.section`
  width: 100%;
  height: 100%;

  padding: 18px;

  display: flex;
  flex-direction: column;

  background-color: var(--background-theme);
`;

export const Title = styled.h2`
  width: 100%;

  color: var(--color-violet);
  font-family: Poppins;
  font-size: 3.6rem;
  letter-spacing: 0.02em;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  flex: 1;

  ${mediaQueries('md')`
    flex-direction: row;
    align-items: center;
    gap: 4.8rem;
  `};
`;
