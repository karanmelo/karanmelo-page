import styled from 'styled-components';

import TechBackground from '../../../../../../assets/tech-background.jpg';

export const Section = styled.section`
  width: 100%;
  height: 12rem;

  display: flex;
  flex-direction: column;

  background: url(${TechBackground}) center no-repeat;
  background-size: cover;
`;
