import React from 'react';

import { getSkillLevelColor, getSkillLevelLabel } from '../skillLevel';
import * as S from './styles';

interface ProgressProps {
  progress: number;
  label?: string;
  icon?: string;
}

export const ProgressBar: React.FC<ProgressProps> = ({
  progress,
  label,
  icon,
}) => {
  const color = getSkillLevelColor(progress);

  return (
    <S.Container>
      {label && <S.Header>{label}</S.Header>}
      <S.Bar $progress={progress} $color={color}>
        <S.BarPin $progress={progress} $color={color} />
      </S.Bar>
      <S.Label>{icon || `${progress}%`}</S.Label>
      {!icon && (
        <S.LevelBadge $color={color}>
          {getSkillLevelLabel(progress)}
        </S.LevelBadge>
      )}
    </S.Container>
  );
};
