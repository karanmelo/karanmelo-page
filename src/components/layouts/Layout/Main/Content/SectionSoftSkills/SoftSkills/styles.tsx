import Image from 'next/image';
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

export const Content = styled.div`
  width: 100%;

  padding: 0 2rem;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 20px;
`;

interface AccentProps {
  $accentColor: string;
}

export const Card = styled.div<AccentProps>`
  min-width: 15rem;
  max-width: 18rem;
  flex: 1 1 15rem;

  padding: 24px 18px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  border-radius: 12px;
  border: 1px solid var(--color-border);

  text-align: center;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-6px);
    border-color: ${({ $accentColor }) => $accentColor};
    box-shadow: 0 10px 24px -12px ${({ $accentColor }) => $accentColor};
  }
`;

export const IconWrapper = styled.span<AccentProps>`
  width: 5.6rem;
  height: 5.6rem;
  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background-color: ${({ $accentColor }) => `${$accentColor}26`};
`;

export const Icon = styled(Image)`
  width: 3.2rem;
  height: 3.2rem;
  object-fit: contain;
`;

export const Label = styled.span`
  font-family: Roboto;
  font-size: 1.6rem;
  font-weight: 700;
`;

export const LevelBadge = styled.span<AccentProps>`
  padding: 2px 10px;

  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ $accentColor }) => $accentColor};

  border: 1px solid ${({ $accentColor }) => $accentColor};
  border-radius: 999px;
`;
