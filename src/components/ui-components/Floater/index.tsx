import React from 'react';

import * as S from './styles';

type FloaterProps = {
  img: string;
  style?: React.CSSProperties;
};

export const Floater: React.FC<FloaterProps> = ({ img, style }) => (
  <S.Floater src={img} style={style} />
);
