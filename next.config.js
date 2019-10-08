const withOffline = require('next-offline');
const WorkboxPlugin = require('workbox-webpack-plugin');

const nextConfig = {
	target            : 'serverless',
	transformManifest : (manifest) =>
		[
			'/'
		].concat(manifest), // add the homepage to the cache
	// Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we
	// turn on the SW in dev mode so that we can actually test it

	workboxOpts       : {
		swDest           : 'static/service-worker.js',
		navigateFallback : '/index.html',

		runtimeCaching   : [
			{
				urlPattern : /^https?\/\/chupetinps.herokuapp.com\/.*/,
				handler    : 'StaleWhileRevalidate',
				options    : {
					cacheableResponse : {
						statuses : [
							0,
							200
						]
					}
				}
			},
			{
				urlPattern : /^https?.*/,
				handler    : 'NetworkFirst',
				options    : {
					cacheableResponse : {
						statuses : [
							0,
							200
						]
					}
				}
			}
		]
	},
	plugins           : [
		// Other plugins...

		new WorkboxPlugin.GenerateSW({
			// Do not precache images
			exclude        : [
				/\.(?:png|jpg|jpeg|svg)$/
			],
			// Define runtime caching rules.
			runtimeCaching : [
				{
					// Match any request that ends with .png, .jpg, .jpeg or .svg.
					urlPattern : /\.(?:png|jpg|jpeg|svg|webp)$/,

					// Apply a cache-first strategy.
					handler    : 'CacheFirst',

					options    : {
						// Use a custom cache name.
						cacheName  : 'images',

						// Only cache 10 images.
						expiration : {
							maxEntries : 40
						}
					}
				}
			]
		})
	]
};

module.exports = withOffline(nextConfig);
