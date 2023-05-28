/* eslint-disable @typescript-eslint/no-var-requires */
// const withOffline = require('next-offline');

const withPWA = require('next-pwa')({
  dest: 'public',
  register: false,
  skipWaiting: true,
});

module.exports = withPWA({
  i18n: {
    locales: ['pt-br'],
    defaultLocale: 'pt-br',
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
});
