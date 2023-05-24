import { useEffect } from 'react';

import NextHead from 'next/head';

import { register, unregister } from 'next-offline/runtime';

export const Head: React.FC = () => {
  useEffect(() => {
    register('/service-worker.js', { scope: '/' });

    return () => {
      unregister();
    };
  }, []);

  return (
    <NextHead>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content="Description" />
      <meta name="keywords" content="Keywords" />
      <title>KaranMelo</title>

      <link rel="manifest" href="/manifest.json" />
      <link
        href="/favicon-16x16.png"
        rel="icon"
        type="image/png"
        sizes="16x16"
      />
      <link
        href="/favicon-32x32.png"
        rel="icon"
        type="image/png"
        sizes="32x32"
      />

      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};
