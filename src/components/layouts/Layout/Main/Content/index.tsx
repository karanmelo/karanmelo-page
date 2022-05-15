import React from 'react';

import SectionAbout from './SectionAbout';
import SectionDivider from './SectionDivider';
import SectionSkills from './SectionSkills';
import { Container } from './styles';

const Content: React.FC = () => (
  <Container>
    <SectionAbout />
    <SectionDivider />
    <SectionSkills />
  </Container>
);

export default Content;
