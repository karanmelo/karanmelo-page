import React from 'react';

import * as S from './styles';

export interface SectionDividerProps {
  accent?: 'violet' | 'green';
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  accent = 'violet',
}) => (
  <S.Section $accent={accent}>
    <S.Marker $accent={accent} />
  </S.Section>
);
