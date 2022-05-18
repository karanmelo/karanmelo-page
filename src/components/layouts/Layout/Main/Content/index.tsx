import React from 'react';

import SectionAbout from './SectionAbout';
import {
  SectionDivider,
  SectionDividerBackgrounOptions,
} from './SectionDivider';
import SectionHistory from './SectionHistory';
import SectionSkills from './SectionSkills';
import { Container } from './styles';

const Content: React.FC = () => (
  <Container>
    <SectionAbout />
    <SectionDivider background={SectionDividerBackgrounOptions.FULL_STACK} />
    <SectionSkills />
    <SectionDivider background={SectionDividerBackgrounOptions.TECH} />
    <SectionHistory />
  </Container>
);

export default Content;
