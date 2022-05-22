import React from 'react';

import About from './About';
import * as S from './styles';
import { WorkingImage } from './WorkingImage';

const SectionAbout: React.FC = () => {
  const elementRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <S.Section id="about">
      <S.Title ref={elementRef}>Sobre mim</S.Title>
      <S.Container>
        <WorkingImage />
        <About elementRef={elementRef} />
      </S.Container>
    </S.Section>
  );
};

export default SectionAbout;
