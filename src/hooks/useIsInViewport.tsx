import { useState, useEffect } from 'react';

export const useIsInViewport = (
  ref: React.MutableRefObject<Element | null>
) => {
  const [isInViewPort, setIsInViewport] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref]);

  return isInViewPort;
};
