/// <reference lib="webworker" />
import { defaultCache } from '@serwist/next/worker';
import type {
  PrecacheEntry,
  RuntimeCaching,
  SerwistGlobalConfig,
} from 'serwist';
import { CacheFirst, ExpirationPlugin, Serwist } from 'serwist';

// This declares the value of `self.__SW_MANIFEST`, which is injected by
// `@serwist/next` at build time.
declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  }
}

declare const self: ServiceWorkerGlobalScope;

// Preserves the image caching rule from the previous hand-written
// public/sw.js (Workbox CacheFirst, 20 entries, 12h expiry). This is
// checked before the framework defaults so it takes precedence for images.
const imageCaching: RuntimeCaching = {
  matcher: /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
  handler: new CacheFirst({
    cacheName: 'image-caches',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 20,
        maxAgeSeconds: 12 * 60 * 60,
      }),
    ],
  }),
};

const serwist = new Serwist({
  // eslint-disable-next-line no-underscore-dangle -- property name is mandated by the @serwist/next API
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: [imageCaching, ...defaultCache],
});

serwist.addEventListeners();
