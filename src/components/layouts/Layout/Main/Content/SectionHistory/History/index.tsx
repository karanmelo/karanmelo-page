import React from 'react';

import { Container, Title, Content } from './styles';

const History: React.FC = () => (
  <Container>
    <Title>Um pouco sobre minha história</Title>
    <Content>
      <ol>
        <li>nata.house</li>
        <li>Zalpy</li>
        <li>Makerplanet</li>
        <li>Softwell</li>
        <li>Universidade Jorge Amado</li>
        <li>O resto da vida</li>
      </ol>
    </Content>
  </Container>
);

export default History;
