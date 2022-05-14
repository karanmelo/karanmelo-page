import React from 'react';

import { NavHome } from './styles';

const Home: React.FC = () => {
  return (
    <NavHome href="/">
      <img src="favicon.ico" alt="Karan Melo" />
      Karan Melo
    </NavHome>
  );
};

export default Home;
