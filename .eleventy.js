module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("bundle.css");

    return {
        dir: {
            input: "src",
            includes: "_includes",
            data: "_data",
            output: "_site"
        }
    };
};