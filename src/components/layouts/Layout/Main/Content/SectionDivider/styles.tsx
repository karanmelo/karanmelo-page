import Image from 'next/image';
import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 12rem;

  display: flex;
  flex-direction: column;
`;

export const BackgroundSection = styled(Image)`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;
