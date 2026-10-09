import React from 'react';

import { HardSkills } from './HardSkills';
import * as S from './styles';

const SectionHardSkills: React.FC = () => (
  <S.Section id="hard-skills">
    <S.Title>Hard Skills</S.Title>
    <HardSkills />
  </S.Section>
);

export default SectionHardSkills;
