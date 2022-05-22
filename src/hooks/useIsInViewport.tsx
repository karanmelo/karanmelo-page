import { useState, useEffect, useCallback } from 'react';

export const useIsInViewport = (ref: React.MutableRefObject<any>) => {
  const [isInViewPort, setIsInViewport] = useState(false);

  const handleScroll = useCallback(() => {
    const { bottom } = ref.current.getBoundingClientRect();
    return setIsInViewport(window.innerHeight - bottom > 20);
  }, [ref]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref, isInViewPort, handleScroll]);

  return isInViewPort;
};
