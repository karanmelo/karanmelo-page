import React from 'react';

import { Container } from './styles';
import Welcome from './Welcome';

const Hero: React.FC = () => {
  return (
    <Container>
      <Welcome />
    </Container>
  );
};

export default Hero;
