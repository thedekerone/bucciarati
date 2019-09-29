// next.config.js
const withOptimizedImages = require('next-optimized-images');
const jpeg = require('imagemin-mozjpeg');
module.exports = withOptimizedImages({
	/* config for next-optimized-images */
	config : { jpeg }
	// your config for other plugins or the general next.js here...
});
