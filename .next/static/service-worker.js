self.__precacheManifest = [
  "/",
  {
    "url": "/_next/static/chunks/commons.5e872c168fa77df56052.js",
    "revision": "c9b395954834e1c5b353"
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
    "url": "/_next/static\\WJlJOXK7gQiLOG80wkFBM\\pages\\_app.js",
    "revision": "8e378ffc35d04d5085b2"
  },
  {
    "url": "/_next/static\\WJlJOXK7gQiLOG80wkFBM\\pages\\_error.js",
    "revision": "204319f781630984934e"
  },
  {
    "url": "/_next/static\\WJlJOXK7gQiLOG80wkFBM\\pages\\cart.js",
    "revision": "9bdcaec1a70b41198b2b"
  },
  {
    "url": "/_next/static\\WJlJOXK7gQiLOG80wkFBM\\pages\\index.js",
    "revision": "8a84e69ab7fff46a1505"
  },
  {
    "url": "/_next/static\\WJlJOXK7gQiLOG80wkFBM\\pages\\producto.js",
    "revision": "35404b28ada754e6c8cc"
  },
  {
    "url": "/_next/static\\WJlJOXK7gQiLOG80wkFBM\\pages\\single.js",
    "revision": "031b9d7f9492c7023154"
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

workbox.routing.registerRoute(/^https?\/\/chupetinps.herokuapp.com\/.*/, new workbox.strategies.StaleWhileRevalidate({ plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"https-calls","networkTimeoutSeconds":15, plugins: [new workbox.expiration.Plugin({ maxEntries: 150, maxAgeSeconds: 2592000, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
