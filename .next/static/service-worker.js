self.__precacheManifest = [
  "/",
  {
    "url": "/_next/static/chunks/commons.a5890d37b3870e665efb.js",
    "revision": "4caf0f39d10ff156681c"
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
    "url": "/_next/static\\J-VdX7mqYX4PkU0E8rM5t\\pages\\_app.js",
    "revision": "efabbf829ac8a2568832"
  },
  {
    "url": "/_next/static\\J-VdX7mqYX4PkU0E8rM5t\\pages\\_error.js",
    "revision": "af959aa8d9d479dc4078"
  },
  {
    "url": "/_next/static\\J-VdX7mqYX4PkU0E8rM5t\\pages\\cart.js",
    "revision": "153f3e32e352899beda9"
  },
  {
    "url": "/_next/static\\J-VdX7mqYX4PkU0E8rM5t\\pages\\index.js",
    "revision": "002af4d1082a09ab27aa"
  },
  {
    "url": "/_next/static\\J-VdX7mqYX4PkU0E8rM5t\\pages\\producto.js",
    "revision": "b67f0d18871e557f3be6"
  },
  {
    "url": "/_next/static\\J-VdX7mqYX4PkU0E8rM5t\\pages\\single.js",
    "revision": "d6b7b55b7b907381b377"
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
