import React from 'react';

import About from './About';
import OurValues from './OurValues';
import { Container } from './styles';

const SectionAbout: React.FC = () => (
  <Container>
    <OurValues />
    <About />
  </Container>
);

export default SectionAbout;
