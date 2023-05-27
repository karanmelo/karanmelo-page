import React from 'react';

import { Container, BackgroundImage } from './styles';
import Welcome from './Welcome';

export const Hero: React.FC = () => (
  <Container>
    <Welcome />
    <BackgroundImage alt="" />
  </Container>
);
