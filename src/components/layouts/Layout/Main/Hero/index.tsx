import React from 'react';

import { Container } from './styles';
import Welcome from './Welcome';

export const Hero: React.FC = () => {
  return (
    <Container>
      <Welcome />
    </Container>
  );
};
