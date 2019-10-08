self.__precacheManifest = [
  "/",
  {
    "url": "/_next/static/chunks/commons.77b17000539e1aea68a6.js",
    "revision": "41dc323159b11e7f6583"
  },
  {
    "url": "/_next/static/runtime/main-d1468aaee677d1fa07af.js",
    "revision": "14b988244dcbf6dbcd30"
  },
  {
    "url": "/_next/static/runtime/webpack-035ac2b14bde147cb4a8.js",
    "revision": "be4b6cc6d10632d2262c"
  },
  {
    "url": "/_next/static\\q_SKTutMP4Xz3be3HtJDH\\pages\\_app.js",
    "revision": "ecc4037d701b26f1edfa"
  },
  {
    "url": "/_next/static\\q_SKTutMP4Xz3be3HtJDH\\pages\\_error.js",
    "revision": "e0d2c7203a33ae754633"
  },
  {
    "url": "/_next/static\\q_SKTutMP4Xz3be3HtJDH\\pages\\cart.js",
    "revision": "4a17619734d7ddfedf2f"
  },
  {
    "url": "/_next/static\\q_SKTutMP4Xz3be3HtJDH\\pages\\index.js",
    "revision": "18aa3e940fb8f0a421bf"
  },
  {
    "url": "/_next/static\\q_SKTutMP4Xz3be3HtJDH\\pages\\producto.js",
    "revision": "96fd3d70a580fa53c08c"
  },
  {
    "url": "/_next/static\\q_SKTutMP4Xz3be3HtJDH\\pages\\single.js",
    "revision": "2e4cb5ce0ffe29dd244f"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index"));

workbox.routing.registerRoute(/^https?\/\/chupetinps.herokuapp.com\/.*/, new workbox.strategies.StaleWhileRevalidate({ plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"https-calls","networkTimeoutSeconds":15, plugins: [new workbox.expiration.Plugin({ maxEntries: 150, maxAgeSeconds: 2592000, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
