import React from 'react';

import Content from './Content';
import Hero from './Hero';
import { Container } from './styled';

const Main: React.FC = () => {
  return (
    <Container>
      <Hero />
      <Content />
    </Container>
  );
};

export default Main;
