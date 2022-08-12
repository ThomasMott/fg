const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
	// Copy the `css` directory to the output
	eleventyConfig.addPassthroughCopy('css');
	eleventyConfig.addPassthroughCopy('static');
	eleventyConfig.addPassthroughCopy('js');

	// Watch the `css` directory for changes
	eleventyConfig.addWatchTarget('css');
	eleventyConfig.addWatchTarget('static');
	eleventyConfig.addWatchTarget('js');

	return {
		dir: {
		  output: "docs"
		}
	}
};
