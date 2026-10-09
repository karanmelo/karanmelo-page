import styled from 'styled-components';

interface AccentProps {
  $accentColor: string;
}

export const Card = styled.a<AccentProps>`
  min-width: 14rem;

  padding: 20px 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 12px;
  border: 1px solid var(--color-border);

  cursor: pointer;
  text-align: center;
  text-decoration: none;

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

export const IconWrapper = styled.span`
  width: 4.4rem;
  height: 4.4rem;
  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Label = styled.span`
  font-size: 1.8rem;
  font-weight: 900;
`;

export const Handle = styled.span`
  font-size: 1.3rem;
  opacity: 0.7;
  word-break: break-word;
`;
