import Image from 'next/image';
import styled from 'styled-components';

import { mediaQueries } from 'styles/mediaQueries';

export const Footer = styled.footer`
  position: relative;
  width: 100%;

  padding: 3.2rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  background-color: var(--color-surface);
  border-top: 1px solid var(--color-border);

  z-index: 10;

  ${mediaQueries('sm')`
    flex-direction: row;
    justify-content: space-between;
    padding: 2.8rem 8rem;
  `};

  ${mediaQueries('md')`
    padding: 2.8rem 10%;
  `};

  ${mediaQueries('lg')`
    padding: 2.8rem 15%;
  `};
`;

export const Copy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;

  text-align: center;

  ${mediaQueries('sm')`
    align-items: flex-start;
    text-align: left;
  `};

  & p {
    color: var(--font-color-theme);
    font-size: 1.4rem;
  }

  & p:last-child {
    opacity: 0.6;
    font-size: 1.2rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const SocialLink = styled.a`
  width: 3.6rem;
  height: 3.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid var(--color-border);
  border-radius: 50%;

  transition:
    transform 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: var(--color-violet);
  }
`;

export const Icon = styled(Image)`
  width: 1.8rem;
  height: 1.8rem;
  object-fit: contain;
`;
