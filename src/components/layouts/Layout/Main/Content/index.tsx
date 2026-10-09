import React from 'react';

import SectionAbout from './SectionAbout';
import { SectionDivider } from './SectionDivider';
import SectionHardSkills from './SectionHardSkills';
import SectionHistory from './SectionHistory';
import SectionSoftSkills from './SectionSoftSkills';
import { Container } from './styles';

export const Content: React.FC = () => (
  <Container>
    <SectionAbout />
    <SectionDivider accent="violet" />
    <SectionHistory />
    <SectionDivider accent="green" />
    <SectionHardSkills />
    <SectionDivider accent="violet" />
    <SectionSoftSkills />
  </Container>
);
