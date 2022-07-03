import React from 'react';

import { useIsInScrollTop } from 'hooks';

import { Content } from './Content';
import { Hero } from './Hero';
import * as S from './styled';

export const Main: React.FC = () => {
  const { isInScrollTop } = useIsInScrollTop();

  return (
    <S.Main>
      <Hero />
      <S.ContentContainer visible={!isInScrollTop}>
        <Content />
      </S.ContentContainer>
    </S.Main>
  );
};
