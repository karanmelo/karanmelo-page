import React from 'react';

import { StarIcon } from '../StarIcon';
import * as S from './styles';

export type RatingProps = {
  label: string;
  value: number;
  quantity: number;
};

export const Rating: React.FC<RatingProps> = ({ label, quantity, value }) => {
  const setColor = (rating: boolean) => {
    return rating ? '#FC0' : 'var(--color-light-gray)';
  };

  const renderStars = () => {
    const starsList = [];

    while (starsList.length < quantity) {
      starsList.push(
        <StarIcon color={setColor(starsList.length < value)} size={1.6} />
      );
    }

    return starsList;
  };

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Content>{renderStars()}</S.Content>
    </S.Container>
  );
};
