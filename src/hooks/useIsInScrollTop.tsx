import { useState, useEffect } from 'react';

import { useIsMounted } from './useIsMounted';

export const useIsInScrollTop = () => {
  const [isInScrollTop, setIsInScrollTop] = useState(true);

  const isMounted = useIsMounted();

  useEffect(() => {
    window.addEventListener(
      'scroll',
      () => {
        if (!isMounted.current) return;
        setIsInScrollTop(window.scrollY === 0);
      },
      false
    );
  }, [isInScrollTop, isMounted]);

  return { isInScrollTop };
};
