import styled from 'styled-components';

import Working from '../../../../../../../assets/working.png';

export const Container = styled.div`
  width: 100%;

  display: flex;

  background: url(${Working.src}) center no-repeat;
  background-size: contain;
`;
