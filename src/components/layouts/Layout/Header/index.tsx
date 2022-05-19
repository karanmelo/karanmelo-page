import React, { useEffect, useState } from 'react';

import Home from './Home';
import Menu from './Menu';
import * as S from './styles';

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
    <S.Header active={active}>
      <Home />
      <Menu />
    </S.Header>
  );
};

export default Header;
