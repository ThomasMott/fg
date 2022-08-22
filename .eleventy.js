const { DateTime } = require('luxon');
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
	// Copy the `css` directory to the output
	eleventyConfig.addPassthroughCopy('css');
	eleventyConfig.addPassthroughCopy('static');
	eleventyConfig.addPassthroughCopy('js');

	// Watch the `css` directory for changes
	eleventyConfig.addWatchTarget('css');
	eleventyConfig.addWatchTarget('static');
	eleventyConfig.addWatchTarget('js');

	// rss
	eleventyConfig.addPlugin(pluginRss);

	eleventyConfig.addFilter("postDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
	});

	eleventyConfig.addCollection("tagsList", function(collectionApi) {
        const tagsList = new Set();
        collectionApi.getAll().map( item => {
            if (item.data.tags) { // handle pages that don't have tags
                item.data.tags.map( tag => tagsList.add(tag))
            }
        });
        return tagsList;
    });

	return {
		dir: {
		  output: "docs"
		}
	}
};
