import React from 'react';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import { getSkillLevelColor, getSkillLevelLabel } from '../skillLevel';
import * as S from './styles';

interface CircleProgressProps {
  percentage: number;
  height: string;
  label?: string;
}

export const CircleProgressBar: React.FC<CircleProgressProps> = ({
  percentage,
  height,
  label,
}) => {
  const color = getSkillLevelColor(percentage);

  return (
    <S.Container $height={height}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textSize: '1.8rem',
          pathColor: color,
          textColor: 'var(--font-color-theme)',
          trailColor: 'var(--color-light-gray)',
        })}
      />
      <S.Label>{label}</S.Label>
      <S.LevelBadge $color={color}>
        {getSkillLevelLabel(percentage)}
      </S.LevelBadge>
    </S.Container>
  );
};
