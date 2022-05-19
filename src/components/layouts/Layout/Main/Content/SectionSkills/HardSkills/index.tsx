import React from 'react';

import { ProgressBar } from 'components/ui-components/ProgressBar';

import { Container, Title, Content } from './styles';

export const HardSkills: React.FC = () => {
  return (
    <Container>
      <Title>Hard Skills</Title>
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
};
