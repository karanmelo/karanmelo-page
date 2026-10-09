import React from 'react';

import { Rating } from 'components/ui-components';
import {
  getSkillLevelColor,
  getSkillLevelLabel,
} from 'components/ui-components/skillLevel';

import { softSkills } from './skills';
import * as S from './styles';

export const SoftSkills: React.FC = () => (
  <S.Container>
    <S.Content>
      {softSkills.map(({ id, label, value, quantity, icon }) => {
        const percentage = (value / quantity) * 100;
        const color = getSkillLevelColor(percentage);

        return (
          <S.Card key={id} $accentColor={color}>
            <S.IconWrapper $accentColor={color}>
              <S.Icon src={icon} alt="" quality={100} />
            </S.IconWrapper>
            <S.Label>{label}</S.Label>
            <S.LevelBadge $accentColor={color}>
              {getSkillLevelLabel(percentage)}
            </S.LevelBadge>
            <Rating value={value} quantity={quantity} accentColor={color} />
          </S.Card>
        );
      })}
    </S.Content>
  </S.Container>
);
