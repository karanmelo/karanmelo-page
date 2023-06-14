import React from 'react';

import { Container } from './styles';

const Welcome: React.FC = () => (
  <Container>
    <h2>Seja Bem vindo(a)!!</h2>
    <h3>&#60;Essa página está em construção&#62;</h3>
    <p>
      Estamos nos construindo e reconstruindo. Fique a vontade para conhecer
      esse projeto. &emsp;
      <a href="https://github.com/karanmelo/karanmelo-page">&#60;GitHub&#62;</a>
    </p>
    <a href="/sobre">Saiba mais</a>
  </Container>
);

export default Welcome;
