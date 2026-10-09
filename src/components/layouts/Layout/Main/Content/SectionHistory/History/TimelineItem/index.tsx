import React from 'react';

import { useIsInViewport } from 'hooks';

import { TimelineEntry } from '../experiences';
import * as S from './styles';

const getFadeUpStyles = (visible: boolean) => ({
  transition: 'all 0.6s ease-out',
  opacity: visible ? '1' : '0',
  transform: visible ? 'translateY(0)' : 'translateY(30px)',
});

interface TimelineItemProps {
  entry: TimelineEntry;
  isLast: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  entry,
  isLast,
}) => {
  const elementRef = React.useRef<HTMLLIElement | null>(null);
  const isInViewport = useIsInViewport(elementRef);

  return (
    <S.Item ref={elementRef} style={getFadeUpStyles(isInViewport)}>
      <S.Rail>
        <S.Marker isEducation={entry.type === 'education'} />
        {!isLast && <S.Line />}
      </S.Rail>
      <S.Card>
        <S.Period>{entry.period}</S.Period>
        <S.Organization>{entry.organization}</S.Organization>
        <S.RoleList>
          {entry.roles.map((role) => (
            <span key={role.title}>
              <S.Role>{role.title}</S.Role>
              {role.period && <S.RolePeriod> · {role.period}</S.RolePeriod>}
            </span>
          ))}
        </S.RoleList>
        <S.Location>{entry.location}</S.Location>
        <S.Description>{entry.description}</S.Description>
      </S.Card>
    </S.Item>
  );
};
