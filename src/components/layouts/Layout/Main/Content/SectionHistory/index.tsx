import React from 'react';

import History from './History';
import * as S from './styles';

const SectionHistory: React.FC = () => (
  <S.Section id="history">
    <S.Title>Um pouco sobre minha história</S.Title>
    <History />
  </S.Section>
);

export default SectionHistory;
