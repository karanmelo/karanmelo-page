import React from 'react';

import FullStack from '../../../../../../assets/full-stack.png';
import TechBackground from '../../../../../../assets/tech-background.jpg';
import * as S from './styles';

// eslint-disable-next-line no-shadow
export enum SectionDividerBackgrounOptions {
  TECH = 'tech',
  FULL_STACK = 'fullStack',
}

export type SectionDividerProps = {
  background:
    | SectionDividerBackgrounOptions.TECH
    | SectionDividerBackgrounOptions.FULL_STACK;
};

const getSectionBaground = (option: SectionDividerBackgrounOptions) => {
  switch (option) {
    case SectionDividerBackgrounOptions.TECH:
      return TechBackground;
    case SectionDividerBackgrounOptions.FULL_STACK:
      return FullStack;
    default:
      return TechBackground;
  }
};

export const SectionDivider: React.FC<SectionDividerProps> = ({
  background,
}) => <S.Section background={getSectionBaground(background)} />;
