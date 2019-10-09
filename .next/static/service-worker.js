self.__precacheManifest = [
  "/",
  {
    "url": "/_next/static/chunks/commons.11c04ff8f72485fd512e.js",
    "revision": "2f323b05279a778bd20b"
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
    "url": "/_next/static\\BcKjzkvow8RPxgTFnedvZ\\pages\\_app.js",
    "revision": "f0b0e53ea63b72d8a0e1"
  },
  {
    "url": "/_next/static\\BcKjzkvow8RPxgTFnedvZ\\pages\\_error.js",
    "revision": "5ff12751f80e6fb93654"
  },
  {
    "url": "/_next/static\\BcKjzkvow8RPxgTFnedvZ\\pages\\cart.js",
    "revision": "96d862a19085c6098a34"
  },
  {
    "url": "/_next/static\\BcKjzkvow8RPxgTFnedvZ\\pages\\index.js",
    "revision": "752ad263900931bfd071"
  },
  {
    "url": "/_next/static\\BcKjzkvow8RPxgTFnedvZ\\pages\\producto.js",
    "revision": "f1613cbf7799393e7fcb"
  },
  {
    "url": "/_next/static\\BcKjzkvow8RPxgTFnedvZ\\pages\\single.js",
    "revision": "082ea9532d2c293ade7b"
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

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/"));

workbox.routing.registerRoute(/^https?\/\/chupetinps.herokuapp.com\/(.*)/, new workbox.strategies.StaleWhileRevalidate({ plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
workbox.routing.registerRoute(/^https?\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, new workbox.strategies.CacheFirst({ plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"https-calls","networkTimeoutSeconds":15, plugins: [new workbox.expiration.Plugin({ maxEntries: 150, maxAgeSeconds: 1296000, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
