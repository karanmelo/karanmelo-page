import styled from 'styled-components';

export const Section = styled.section<{ background: string }>`
  width: 100%;
  height: 12rem;

  display: flex;
  flex-direction: column;

  background: ${({ background }) => `url(${background}) center no-repea`}t;
  background-size: cover;
`;
