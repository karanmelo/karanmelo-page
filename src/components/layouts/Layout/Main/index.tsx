import React from 'react';

import { Content } from './Content';
import { Hero } from './Hero';
import * as S from './styled';

export const Main: React.FC = () => {
  return (
    <S.Main>
      <Hero />
      <Content />
    </S.Main>
  );
};
