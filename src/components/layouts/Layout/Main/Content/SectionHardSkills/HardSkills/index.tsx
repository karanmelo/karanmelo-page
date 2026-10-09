import React from 'react';

import { CircleProgressBar } from 'components/ui-components';
import { ProgressBar } from 'components/ui-components/ProgressBar';

import 'react-circular-progressbar/dist/styles.css';

import * as S from './styles';

export const HardSkills: React.FC = () => (
  <S.Container>
    <S.TopSkills>
      <CircleProgressBar label="ReactJS" percentage={90} height="14rem" />
      <CircleProgressBar label="JavaScript" percentage={90} height="20rem" />
      <CircleProgressBar label="Node.js" percentage={85} height="14rem" />
    </S.TopSkills>
    <S.MoreSkills>
      <S.Column>
        <ProgressBar label="TypeScript" progress={80} />
        <ProgressBar label="NestJS" progress={80} />
        <ProgressBar label="Datadog" progress={80} />
        <ProgressBar label="SQL" progress={70} />
        <ProgressBar label="Inteligência artificial" progress={65} />
      </S.Column>
      <S.Column>
        <ProgressBar label="Next.js" progress={65} />
        <ProgressBar label="Cloudflare" progress={60} />
        <ProgressBar label="Docker" progress={60} />
        <ProgressBar label="Java" progress={40} />
        <ProgressBar label="AWS" progress={40} />
      </S.Column>
    </S.MoreSkills>
  </S.Container>
);
