import { useState, useEffect } from 'react';

export const useIsInViewport = (ref: React.MutableRefObject<any>) => {
  const [isInViewPort, setIsInViewport] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const { bottom } = ref.current.getBoundingClientRect();
      return setIsInViewport(window.innerHeight - bottom > 20);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, isInViewPort]);

  return isInViewPort;
};