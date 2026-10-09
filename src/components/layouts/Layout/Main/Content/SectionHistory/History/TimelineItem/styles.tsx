import styled from 'styled-components';

interface MarkerProps {
  isEducation: boolean;
}

export const Item = styled.li`
  position: relative;

  display: flex;
  gap: 20px;

  padding-bottom: 40px;

  &:last-child {
    padding-bottom: 0;
  }
`;

export const Rail = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  flex-shrink: 0;
`;

export const Marker = styled.span<MarkerProps>`
  width: 18px;
  height: 18px;
  flex-shrink: 0;

  border-radius: 50%;
  background-color: ${({ isEducation }) =>
    isEducation ? 'var(--color-light-green)' : 'var(--color-violet)'};
  box-shadow: 0 0 0 4px var(--background-theme);
`;

export const Line = styled.span`
  width: 2px;
  flex: 1;

  margin-top: 4px;

  background-color: var(--color-border);
`;

export const Card = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Period = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--color-light-green);
`;

export const Organization = styled.h3`
  font-size: 2.6rem;
  color: var(--color-violet);
`;

export const RoleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Role = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
`;

export const RolePeriod = styled.span`
  font-size: 1.4rem;
  opacity: 0.7;
`;

export const Location = styled.span`
  font-size: 1.4rem;
  opacity: 0.7;
`;

export const Description = styled.p`
  margin-top: 4px;

  font-size: 1.6rem;
  line-height: 1.5;
`;
