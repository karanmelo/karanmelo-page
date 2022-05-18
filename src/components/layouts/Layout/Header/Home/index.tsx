import React from 'react';

import { NavHome, Logo } from './styles';

const Home: React.FC = () => {
  return (
    <NavHome href="/">
      <Logo src="logo.png" alt="Karan Melo" />
    </NavHome>
  );
};

export default Home;
