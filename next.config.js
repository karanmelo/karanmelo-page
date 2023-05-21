const path = require('path');

const withOffline = require('next-offline');

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  pwa: {
    dest: 'public',
    swSrc: 'service-worker.js'
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  generateInDevMode: false,
  dontAutoRegisterSw: true,
  generateSw: false,
  workboxOpts: {
    swDest: './service-worker.js',
    swSrc: path.join(__dirname, 'public/sw.js'),
  },
};

module.exports = withOffline(nextConfig);
