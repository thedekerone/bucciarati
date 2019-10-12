self.__precacheManifest = [
  "/",
  {
    "url": "/_next/static/chunks/commons.4ea7dca44df85e173cfe.js",
    "revision": "2258ae4c918afaceaca7"
  },
  {
    "url": "/_next/static/images/blueTexture-eaf4d4084118323c72a62325fb6c26d1.jpg"
  },
  {
    "url": "/_next/static/images/main2-0f57295e1f54fff3edbb40b7cf3631e6.webp"
  },
  {
    "url": "/_next/static/images/main2-1224e39950d0966a82b4d169d4347751.jpg"
  },
  {
    "url": "/_next/static/images/orangeTexture-12d3af55887a3545c75031e00badc475.jpg"
  },
  {
    "url": "/_next/static/images/polo-3335a080a1a6578ef55c088b41219edb.jpg"
  },
  {
    "url": "/_next/static/images/purpleTexture-af9731befbbc916188fbbc5006eaedea.jpg"
  },
  {
    "url": "/_next/static/kmUoOc917TLIBx9_PAuT9/pages/_app.js",
    "revision": "6777934d51bda70bb398"
  },
  {
    "url": "/_next/static/kmUoOc917TLIBx9_PAuT9/pages/_error.js",
    "revision": "be01b4678e1905ab17fa"
  },
  {
    "url": "/_next/static/kmUoOc917TLIBx9_PAuT9/pages/cart.js",
    "revision": "6e69c568a452320ccbf8"
  },
  {
    "url": "/_next/static/kmUoOc917TLIBx9_PAuT9/pages/index.js",
    "revision": "7ee53f48a0a9b9d61659"
  },
  {
    "url": "/_next/static/kmUoOc917TLIBx9_PAuT9/pages/mongol.js",
    "revision": "5641108889aaa7d99933"
  },
  {
    "url": "/_next/static/kmUoOc917TLIBx9_PAuT9/pages/producto.js",
    "revision": "74a30acf2dd42acaf9b0"
  },
  {
    "url": "/_next/static/kmUoOc917TLIBx9_PAuT9/pages/single.js",
    "revision": "7ea36570f2f2c5f0d085"
  },
  {
    "url": "/_next/static/runtime/main-d62091e4eb1f54212129.js",
    "revision": "57fae15c6f01a9fd561b"
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
