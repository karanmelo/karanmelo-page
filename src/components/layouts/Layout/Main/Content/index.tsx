import React from 'react';

import SectionAbout from './SectionAbout';
import { SectionContacts } from './SectionContacts';
import {
  SectionDivider,
  SectionDividerBackgrounOptions,
} from './SectionDivider';
import SectionHistory from './SectionHistory';
import SectionSkills from './SectionSkills';
import { Container } from './styles';

export const Content: React.FC = () => (
  <Container>
    <SectionAbout />
    <SectionDivider background={SectionDividerBackgrounOptions.FULL_STACK} />
    <SectionSkills />
    <SectionDivider background={SectionDividerBackgrounOptions.TECH} />
    <SectionHistory />
    <SectionDivider background={SectionDividerBackgrounOptions.CONNECTIONS} />
    <SectionContacts />
  </Container>
);
