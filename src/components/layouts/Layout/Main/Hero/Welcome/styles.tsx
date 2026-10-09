import styled from 'styled-components';

import { mediaQueries } from 'styles/mediaQueries';

export const Container = styled.div`
  position: relative;
  width: 90%;
  max-width: 780px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  padding: 0 2rem;

  text-align: center;
  z-index: 1;

  & * {
    color: var(--font-color-white);
  }
`;

export const Eyebrow = styled.span`
  padding: 0.6rem 1.6rem;

  color: #d4b3f2;
  font-family: Poppins;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  background: rgba(135, 25, 204, 0.25);
  border: 1px solid rgba(135, 25, 204, 0.5);
  border-radius: 999px;
`;

export const Name = styled.h1`
  font-family: Poppins;
  font-size: 4rem;
  line-height: 1.15;

  ${mediaQueries('sm')`
    font-size: 5.6rem;
  `};
`;

export const Role = styled.h2`
  color: var(--color-light-green) !important;
  font-family: Poppins;
  font-size: 2rem;
  font-weight: 700;

  ${mediaQueries('sm')`
    font-size: 2.4rem;
  `};
`;

export const Subtitle = styled.p`
  max-width: 60rem;

  opacity: 0.85;
  font-size: 1.7rem;
  line-height: 1.6;

  ${mediaQueries('sm')`
    font-size: 1.9rem;
  `};
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  margin-top: 0.8rem;

  ${mediaQueries('sm')`
    flex-direction: row;
  `};
`;

interface CtaProps {
  $variant: 'primary' | 'secondary';
}

export const Cta = styled.a<CtaProps>`
  min-width: 17rem;
  padding: 1.4rem 2.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Poppins;
  font-size: 1.5rem;
  font-weight: 700;

  border-radius: 999px;
  cursor: pointer;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;

  ${({ $variant }) =>
    $variant === 'primary'
      ? `
        background-color: var(--color-violet);
        border: 1px solid var(--color-violet);

        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 32px -12px var(--color-violet);
        }
      `
      : `
        background-color: transparent;
        border: 1px solid rgba(255, 255, 255, 0.35);

        &:hover {
          transform: translateY(-2px);
          background-color: rgba(255, 255, 255, 0.08);
        }
      `}
`;
