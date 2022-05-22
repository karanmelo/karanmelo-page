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

  color: var(--color-light-green);
  font-family: Amatic;
  font-size: 4rem;
  text-align: left;
`;

export const IconsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const TopSkills = styled.div`
  display: flex;
  gap: 15px;

  & > div {
    transition: transform 0.5s;

    &:hover {
      transform: translateY(-15px);
    }
  }
`;

export const MoreSkills = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  width: 100%;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 25px;
`;
