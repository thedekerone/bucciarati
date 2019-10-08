self.__precacheManifest = [
  "/",
  {
    "url": "/_next/static/chunks/commons.e9c9b5311f06df8ab4d6.js",
    "revision": "e675dfff00cb298173cf"
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
    "url": "/_next/static\\lGcEve-EtyBE0PAsye83l\\pages\\_app.js",
    "revision": "fc0c1eb301b30af0c642"
  },
  {
    "url": "/_next/static\\lGcEve-EtyBE0PAsye83l\\pages\\_error.js",
    "revision": "41f10daba63e37302ae2"
  },
  {
    "url": "/_next/static\\lGcEve-EtyBE0PAsye83l\\pages\\cart.js",
    "revision": "1ea6d2be3afe87d65d84"
  },
  {
    "url": "/_next/static\\lGcEve-EtyBE0PAsye83l\\pages\\index.js",
    "revision": "1b6730527f646e5e2e84"
  },
  {
    "url": "/_next/static\\lGcEve-EtyBE0PAsye83l\\pages\\producto.js",
    "revision": "d1fcdef281469035da40"
  },
  {
    "url": "/_next/static\\lGcEve-EtyBE0PAsye83l\\pages\\single.js",
    "revision": "04bd4a18f1db86766013"
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

workbox.routing.registerRoute(/^https?\/\/chupetinps.herokuapp.com\/.*/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"https-calls","networkTimeoutSeconds":15, plugins: [new workbox.expiration.Plugin({ maxEntries: 150, maxAgeSeconds: 2592000, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
