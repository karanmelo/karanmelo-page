import React from 'react';

import { Container, Title, Content } from './styles';

const Skills: React.FC = () => (
  <Container>
    <Title>Skills</Title>
    <Content>
      <ol>
        <li>Node.js</li>
        <li>React.js</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>SQL</li>
      </ol>
    </Content>
  </Container>
);

export default Skills;
