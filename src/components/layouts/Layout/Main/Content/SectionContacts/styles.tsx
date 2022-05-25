import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 512px;

  padding: 18px;

  display: flex;
  flex-direction: column;

  background-color: var(--background-theme);
`;

export const Title = styled.h2`
  width: 100%;

  color: var(--color-violet);
  font-family: Amatic;
  font-size: 6rem;
  text-align: center;
`;

export const Content = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Card = styled.a`
  min-width: 10rem;
  min-height: 10rem;

  padding: 12px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border: 1px solid var(--color-violet);
  border-radius: 8px;
  box-shadow: 2px 4px 12px -6px var(--color-violet);

  transition: 0.5s all linear;

  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ContactIcon = styled.img``;

export const ContactLabel = styled.h5`
  font-size: 1.6rem;
`;
