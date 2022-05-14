import React, { useEffect, useState } from 'react';

import Home from './Home';
import Menu from './Menu';
import { Container } from './styles';

const Header: React.FC = () => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    window.addEventListener(
      'scroll',
      () => {
        setActive(window.scrollY === 0);
      },
      false
    );
  }, [active]);

  return (
    <Container active={active}>
      <Home />
      <Menu />
    </Container>
  );
};

export default Header;
