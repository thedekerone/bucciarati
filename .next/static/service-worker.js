self.__precacheManifest = [
  "/",
  {
    "url": "/_next/static/53b0p848gQ2AoyOug65JU/pages/_app.js",
    "revision": "1cb3eaecf7dc76a4f7df"
  },
  {
    "url": "/_next/static/53b0p848gQ2AoyOug65JU/pages/_error.js",
    "revision": "5878dc9f7336a7e29fc0"
  },
  {
    "url": "/_next/static/53b0p848gQ2AoyOug65JU/pages/cart.js",
    "revision": "81f8fe92b5c2e0842943"
  },
  {
    "url": "/_next/static/53b0p848gQ2AoyOug65JU/pages/index.js",
    "revision": "eb0e48300baec1fe1685"
  },
  {
    "url": "/_next/static/53b0p848gQ2AoyOug65JU/pages/mongol.js",
    "revision": "85160104a413e3aaf480"
  },
  {
    "url": "/_next/static/53b0p848gQ2AoyOug65JU/pages/producto.js",
    "revision": "9f1d7edac19e2cf87a5d"
  },
  {
    "url": "/_next/static/53b0p848gQ2AoyOug65JU/pages/single.js",
    "revision": "394cfcd05999049a9d6f"
  },
  {
    "url": "/_next/static/chunks/commons.cf82f2e0ab5312f1f6f9.js",
    "revision": "c949812f808e6f758d79"
  },
  {
    "url": "/_next/static/images/main2-9729a16c7a4fe5edb4e14270f5e695b1.webp"
  },
  {
    "url": "/_next/static/images/mainImage-4b8264f803c7a8e0c6b58f2ff6e9dbc4.jpg"
  },
  {
    "url": "/_next/static/runtime/main-83d1509f39cddf2a7c72.js",
    "revision": "e88e0624c987439c3b87"
  },
  {
    "url": "/_next/static/runtime/webpack-035ac2b14bde147cb4a8.js",
    "revision": "be4b6cc6d10632d2262c"
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

workbox.routing.registerRoute(/^https?\/\/chupetinps.herokuapp.com\/(.*)/, new workbox.strategies.StaleWhileRevalidate({ plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
workbox.routing.registerRoute(/^https?\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, new workbox.strategies.CacheFirst({ plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"https-calls","networkTimeoutSeconds":15, plugins: [new workbox.expiration.Plugin({ maxEntries: 150, maxAgeSeconds: 1296000, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
