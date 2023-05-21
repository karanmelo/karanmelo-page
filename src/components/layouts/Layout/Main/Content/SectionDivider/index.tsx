import React from 'react';

import ConnectionsBackground from '../../../../../../assets/connections.png';
import FullStackBackground from '../../../../../../assets/full-stack.png';
import TechBackground from '../../../../../../assets/tech-background.jpg';
import * as S from './styles';

// eslint-disable-next-line no-shadow
export enum SectionDividerBackgrounOptions {
  TECH = 'tech',
  FULL_STACK = 'fullStack',
  CONNECTIONS = 'connections',
}

export type SectionDividerProps = {
  background:
    | SectionDividerBackgrounOptions.TECH
    | SectionDividerBackgrounOptions.FULL_STACK
    | SectionDividerBackgrounOptions.CONNECTIONS;
};

const getSectionBaground = (option: SectionDividerBackgrounOptions) => {
  switch (option) {
    case SectionDividerBackgrounOptions.TECH:
      return TechBackground.src;
    case SectionDividerBackgrounOptions.FULL_STACK:
      return FullStackBackground.src;
    case SectionDividerBackgrounOptions.CONNECTIONS:
      return ConnectionsBackground.src;
    default:
      return TechBackground.src;
  }
};

export const SectionDivider: React.FC<SectionDividerProps> = ({
  background,
}) => <S.Section background={getSectionBaground(background)} />;
