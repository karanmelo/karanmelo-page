import styled from 'styled-components';

export const Container = styled.div`
  height: 20px;
  width: 100%;

  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
`;

export const Header = styled.div`
  font-family: Roboto;
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.text};
`;

interface BarProps {
  $progress: number;
  $color: string;
}

export const Bar = styled.div<BarProps>`
  height: 5px;
  width: 100%;

  position: relative;

  background-color: var(--color-light-gray);
  border-radius: 8px;

  &::before {
    content: '';
    display: block;
    position: absolute;
    height: 100%;
    max-width: 100%;
    width: ${({ $progress }) => $progress}%;
    min-width: 10%;

    border-radius: 8px;

    transition: all 0.6s linear 1s;

    background-color: ${({ $color }) => $color};
  }
`;

export const BarPin = styled.div<BarProps>`
  position: absolute;
  margin-left: ${({ $progress }) => `calc(${$progress}% - 10px)`};
  top: -4px;

  width: 12px;
  height: 12px;

  border-radius: 50%;

  transition: all 0.6s linear 1s;

  background-color: ${({ $color }) => $color};
`;

export const Label = styled.div`
  min-width: 35px;

  font-size: 1.6rem;
  font-family: Roboto;
  text-align: end;
  color: ${(props) => props.theme.colors.text};
`;

export const LevelBadge = styled.span<{ $color: string }>`
  flex-shrink: 0;

  padding: 2px 8px;

  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ $color }) => $color};

  border: 1px solid ${({ $color }) => $color};
  border-radius: 999px;
`;
