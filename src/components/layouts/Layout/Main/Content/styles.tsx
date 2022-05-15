import styled from 'styled-components';

import TechBackground from '../../../../../assets/tech-background.jpg';

export const Container = styled.div`
  position: relative;
  margin: -60px 30px 0;

  border-radius: 8px 8px 0 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  background: url(${TechBackground}) center no-repeat;
`;
