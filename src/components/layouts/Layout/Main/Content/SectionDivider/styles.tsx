import styled from 'styled-components';

interface AccentProps {
  $accent: 'violet' | 'green';
}

export const Section = styled.section<AccentProps>`
  position: relative;
  width: 100%;
  height: 5.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--background-theme);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;

    height: 1px;

    background: linear-gradient(
      90deg,
      transparent 0%,
      var(--color-border) 20%,
      var(--color-border) 80%,
      transparent 100%
    );
  }
`;

export const Marker = styled.span<AccentProps>`
  position: relative;
  width: 1.2rem;
  height: 1.2rem;
  flex-shrink: 0;

  background-color: ${({ $accent }) =>
    $accent === 'violet' ? 'var(--color-violet)' : 'var(--color-light-green)'};
  border: 3px solid var(--background-theme);
  border-radius: 50%;
  box-shadow: 0 0 0 1px var(--color-border);
`;
