import React from 'react';

import { experiences } from './experiences';
import * as S from './styles';
import { TimelineItem } from './TimelineItem';

const History: React.FC = () => (
  <S.Container>
    <S.Content>
      <S.Timeline>
        {experiences.map((entry, index) => (
          <TimelineItem
            key={entry.id}
            entry={entry}
            isLast={index === experiences.length - 1}
          />
        ))}
      </S.Timeline>
    </S.Content>
  </S.Container>
);

export default History;
