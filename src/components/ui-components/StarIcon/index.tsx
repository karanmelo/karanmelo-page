import React from 'react';

import * as S from './styles';

export interface StarIconProps {
  color: string;
  size: number;
}

export const StarIcon: React.FC<StarIconProps> = ({ color, size }) => (
  <S.Star color={color} size={size} viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </S.Star>
);
