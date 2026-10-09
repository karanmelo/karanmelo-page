import styled from 'styled-components';

interface ContainerProps {
  $height: string;
}

export const Container = styled.div<ContainerProps>`
  height: ${({ $height }) => $height};
  width: ${({ $height }) => $height};

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

export const LevelBadge = styled.span<{ $color: string }>`
  padding: 2px 10px;

  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ $color }) => $color};

  border: 1px solid ${({ $color }) => $color};
  border-radius: 999px;
`;
