import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const Title = styled.h3`
  width: 100%;

  padding: 2rem;

  font-family: Amatic;
  font-size: 3rem;
  text-align: center;
`;

export const Content = styled.div`
  width: 100%;

  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

export const IconsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
