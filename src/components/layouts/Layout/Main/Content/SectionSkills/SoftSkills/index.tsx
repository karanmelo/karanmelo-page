import React from 'react';

import { Rating } from 'components/ui-components';

import ColaborationIcon from '../../../../../../../assets/colaboration.png';
import ComunitcationIcon from '../../../../../../../assets/comunication.png';
import CriativityIcon from '../../../../../../../assets/criativity.png';
import FlexibilityIcon from '../../../../../../../assets/flexibility.png';
import LeadershipIcon from '../../../../../../../assets/leadership.png';
import ProactivityIcon from '../../../../../../../assets/proactivity.png';
import ResilienceIcon from '../../../../../../../assets/resilience.png';
import * as S from './styles';

export const SoftSkills: React.FC = () => (
  <S.Container>
    <S.Title>Soft Skills</S.Title>
    <S.Content>
      <S.RatingWrapper>
        <Rating
          label="Colaboração"
          value={5}
          quantity={5}
          img={ColaborationIcon}
        />
      </S.RatingWrapper>
      <S.RatingWrapper>
        <Rating
          label="Comunicação"
          value={5}
          quantity={5}
          img={ComunitcationIcon}
        />
      </S.RatingWrapper>
      <S.RatingWrapper>
        <Rating
          label="Proatividade"
          value={5}
          quantity={5}
          img={ProactivityIcon}
        />
      </S.RatingWrapper>
      <S.RatingWrapper>
        <Rating label="Liderança" value={4} quantity={5} img={LeadershipIcon} />
      </S.RatingWrapper>
      <S.RatingWrapper>
        <Rating
          label="Flexibilidade"
          value={4}
          quantity={5}
          img={FlexibilityIcon}
        />
      </S.RatingWrapper>
      <S.RatingWrapper>
        <Rating
          label="Resiliência"
          value={4}
          quantity={5}
          img={ResilienceIcon}
        />
      </S.RatingWrapper>
      <S.RatingWrapper>
        <Rating
          label="Criatividade"
          value={4}
          quantity={5}
          img={CriativityIcon}
        />
      </S.RatingWrapper>
      <S.RatingWrapper>
        <Rating label="Liderança" value={4} quantity={5} img={LeadershipIcon} />
      </S.RatingWrapper>
    </S.Content>
  </S.Container>
);
