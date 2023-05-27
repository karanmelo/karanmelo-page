import React from 'react';

import * as S from './styles';

type ProgressProps = {
  progress: number;
  label?: string;
  icon?: string;
};

export const ProgressBar: React.FC<ProgressProps> = ({
  progress,
  label,
  icon,
}) => (
  <S.Container>
    {label && <S.Header>{label}</S.Header>}
    <S.Bar progress={progress}>
      <S.BarPin progress={progress} />
    </S.Bar>
    <S.Label>{icon || `${progress}%`}</S.Label>
  </S.Container>
);
