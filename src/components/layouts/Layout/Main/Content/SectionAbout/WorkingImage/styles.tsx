import styled from 'styled-components';

import { mediaQueries } from 'styles/mediaQueries';

import MePresentation from '../../../../../../../assets/me_presentation.png';

export const Container = styled.div`
  width: 100%;
  max-width: 32rem;
  aspect-ratio: 1 / 1;
  flex-shrink: 0;

  background: url(${MePresentation.src}) center no-repeat;
  background-size: contain;
  border-radius: 50%;

  ${mediaQueries('md')`
    flex: 1 1 36%;
    max-width: 38rem;
  `};
`;
