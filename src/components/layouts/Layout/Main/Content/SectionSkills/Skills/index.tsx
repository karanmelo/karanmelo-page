import React from 'react';

import { ProgressBar } from 'components/ui-components/ProgressBar';

import { Container, Title, Content } from './styles';

const Skills: React.FC = () => (
  <Container>
    <Title>Skills</Title>
    <Content>
      <ProgressBar label="Node.js" progress={80} />
      <ProgressBar label="React.js" progress={80} />
      <ProgressBar label="Javascript" progress={80} />
      <ProgressBar label="Typescript" progress={80} />
      <ProgressBar label="SQL" progress={70} />
      <ProgressBar label="Gambiarra" progress={100} icon="😂" />
    </Content>
  </Container>
);

export default Skills;
