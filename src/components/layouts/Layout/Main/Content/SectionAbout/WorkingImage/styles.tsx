import styled from 'styled-components';

export const Container = styled.div<{ background: string }>`
  width: 100%;

  display: flex;

  background: ${({ background }) => `url(${background}) center no-repea`}t;
  background-size: contain;
`;
