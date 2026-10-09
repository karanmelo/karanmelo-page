import NextHead from 'next/head';

export const Head: React.FC = () => {
  // Service worker registration is handled automatically by @serwist/next
  // (see next.config.js), no manual registration needed here.
  return (
    <NextHead>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content="Description" />
      <meta name="keywords" content="Keywords" />
      <meta name="theme-color" content="#363537" />
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
