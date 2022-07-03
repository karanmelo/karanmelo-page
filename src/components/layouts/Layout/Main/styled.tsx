import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  height: 100%;

  background-color: var(--color-light-gray);
`;

export const ContentContainer = styled.div<{ visible: boolean }>`
  position: relative;
  top: ${({ visible }) => (visible ? '0' : '60px')};
  transition: all 0.8s;
`;
