const withSerwist = require('@serwist/next').default({
  swSrc: 'src/sw.ts',
  swDest: 'public/sw.js',
  disable: process.env.NODE_ENV === 'development',
});

module.exports = withSerwist({
  i18n: {
    locales: ['pt-br'],
    defaultLocale: 'pt-br',
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  agentRules: false,
});
