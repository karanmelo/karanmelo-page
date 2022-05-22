import React from 'react';

import * as S from './styles';

export type StarIconProps = {
  color: string;
  size: number;
};

export const StarIcon: React.FC<StarIconProps> = ({ color, size }) => (
  <S.Star color={color} size={size} />
);
