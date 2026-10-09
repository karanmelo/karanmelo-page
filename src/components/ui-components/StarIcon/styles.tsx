import styled from 'styled-components';

interface StarProps {
  color: string;
  size: number;
}

export const Star = styled.svg<StarProps>`
  width: ${({ size }) => `${size}rem`};
  height: ${({ size }) => `${size}rem`};
  flex-shrink: 0;

  fill: ${({ color }) => color};

  transition: fill 0.3s ease;
`;
