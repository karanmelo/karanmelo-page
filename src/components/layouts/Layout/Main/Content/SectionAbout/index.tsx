import React from 'react';

import About from './About';
import * as S from './styles';
import { WorkingImage } from './WorkingImage';

const SectionAbout: React.FC = () => (
  <S.Section id="about">
    <S.Title>Sobre mim</S.Title>
    <S.Container>
      <WorkingImage />
      <About />
    </S.Container>
  </S.Section>
);

export default SectionAbout;
