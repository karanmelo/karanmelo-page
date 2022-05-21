import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  background-color: var(--background-theme);
`;

export const Title = styled.h2`
  width: 100%;

  margin-top: 15px;

  color: var(--color-violet);
  font-family: Amatic;
  font-size: 4rem;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;
