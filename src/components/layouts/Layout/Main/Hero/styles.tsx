import Image from 'next/image';
import styled from 'styled-components';

import HeroBackground from '../../../../../assets/hero-background.jpg';

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackgroundImage = styled(Image).attrs(() => ({
  src: HeroBackground.src,
  fill: true,
  quality: 100,
}))`
  object-fit: fill;

  z-index: 0;
`;
