import React from 'react';

import { ProgressBar } from 'components/ui-components/ProgressBar';

import * as S from './styles';

export const HardSkills: React.FC = () => (
  <S.Container>
    <S.Title>Hard Skills</S.Title>
    <S.Content>
      <ProgressBar label="Javascript" progress={90} />
      <ProgressBar label="Typescript" progress={80} />
      <ProgressBar label="Node.js" progress={85} />
      <ProgressBar label="React.js" progress={90} />
      <ProgressBar label="Banco de Dados" progress={70} />
      <ProgressBar label="Gambiarra" progress={100} icon="😂" />
    </S.Content>
  </S.Container>
);
