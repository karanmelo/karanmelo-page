import React from 'react';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import * as S from './styles';

type CircleProgressProps = {
  percentage: number;
  height: string;
  label?: string;
};

export const CircleProgressBar: React.FC<CircleProgressProps> = ({
  percentage,
  height,
  label,
}) => {
  const setColor = (value: number) => {
    if (value < 25) {
      return '#c0392b';
    }
    if (value < 75) {
      return '#f1c40f';
    }
    if (value < 90) {
      return '#3498db';
    }
    return '#2ecc71';
  };

  return (
    <S.Container progress={percentage} height={height}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textSize: '1.8rem',
          pathColor: setColor(percentage),
          textColor: 'var(--font-color-theme)',
          trailColor: 'var(--color-light-gray)',
        })}
      />
      <S.Label>{label}</S.Label>
    </S.Container>
  );
};
