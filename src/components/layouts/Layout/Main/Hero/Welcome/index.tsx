import React from 'react';

import { Container } from './styles';

const Welcome: React.FC = () => (
  <Container>
    <h2>Seja Bem vindo(a)!!</h2>
    <p>É um prazer te receber aqui e poder compartilhar um pouco sobre mim</p>
    <a href="/sobre">Saiba mais</a>
  </Container>
);

export default Welcome;
