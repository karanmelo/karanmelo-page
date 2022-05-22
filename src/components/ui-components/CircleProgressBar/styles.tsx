import styled from 'styled-components';

type ContainerProps = {
  progress: number;
  height: string;
};

export const Container = styled.div<ContainerProps>`
  height: ${({ height }) => height};
  width: ${({ height }) => height};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const Label = styled.h2`
  position: relative;
  color: var(--color-violet);
  font-weight: 700;
  font-size: 1.8rem;
  font-family: Roboto;
  text-transform: uppercase;
  transition: 0.5s;
`;
