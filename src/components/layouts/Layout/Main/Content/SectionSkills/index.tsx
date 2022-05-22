import React from 'react';

import { HardSkills } from './HardSkills';
import { SoftSkills } from './SoftSkills';
import * as S from './styles';

const SectionSkills: React.FC = () => {
  return (
    <S.Section id="skills">
      <S.Title>Skills</S.Title>
      <S.Container>
        <HardSkills />
        <SoftSkills />
      </S.Container>
    </S.Section>
  );
};

export default SectionSkills;
