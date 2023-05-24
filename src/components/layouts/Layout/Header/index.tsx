import React, { useEffect, useState } from 'react';

import { useIsMounted } from 'hooks/useIsMounted';

import Home from './Home';
import Menu from './Menu';
import * as S from './styles';

export const Header: React.FC = () => {
  const [active, setActive] = useState(true);

  const isMounted = useIsMounted();

  useEffect(() => {
    window.addEventListener(
      'scroll',
      () => {
        if (!isMounted.current) return;
        setActive(window.scrollY === 0);
      },
      false
    );
  }, [active, isMounted]);

  return (
    <S.Header active={active === true}>
      <Home />
      <Menu />
    </S.Header>
  );
};
