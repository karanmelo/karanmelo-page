import React from 'react';

import { StarIcon } from '../StarIcon';
import * as S from './styles';

export interface RatingProps {
  value: number;
  quantity: number;
  accentColor?: string;
}

export const Rating: React.FC<RatingProps> = ({
  quantity,
  value,
  accentColor = 'var(--color-violet)',
}) => {
  const setColor = (rating: boolean) =>
    rating ? accentColor : 'var(--color-light-gray)';

  const renderStars = () => {
    const starsList = [];

    while (starsList.length < quantity) {
      starsList.push(
        <StarIcon
          key={starsList.length + 1}
          color={setColor(starsList.length < value)}
          size={1.4}
        />
      );
    }

    return starsList;
  };

  return <S.Content>{renderStars()}</S.Content>;
};
