import React from 'react';

import { Rating } from 'components/ui-components';

import * as S from './styles';

export const SoftSkills: React.FC = () => (
  <S.Container>
    <S.Title>Soft Skills</S.Title>
    <S.Content>
      <S.RatingWrapper>
        <Rating label="Flexibilidade" value={4} quantity={5} />
      </S.RatingWrapper>
      <S.RatingWrapper>
        <Rating label="Colaboração" value={5} quantity={5} />
      </S.RatingWrapper>
      <S.RatingWrapper>
        <Rating label="Comunicação" value={5} quantity={5} />
      </S.RatingWrapper>
      <S.RatingWrapper>
        <Rating label="Resiliência" value={4} quantity={5} />
      </S.RatingWrapper>
      <S.RatingWrapper>
        <Rating label="Criatividade" value={4} quantity={5} />
      </S.RatingWrapper>
      <S.RatingWrapper>
        <Rating label="Proatividade" value={5} quantity={5} />
      </S.RatingWrapper>
    </S.Content>
  </S.Container>
);
