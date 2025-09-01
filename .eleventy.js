const sass = require("eleventy-sass");
const yaml = require("js-yaml");
const htmlmin = require("html-minifier-terser");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(sass);

  eleventyConfig.addDataExtension('yml', contents => yaml.safeLoad(contents))

  // Copy files and dir folders to the output
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/scripts");
  eleventyConfig.addPassthroughCopy("src/error.html");

  // Minify HTML
  eleventyConfig.addTransform("htmlmin", function (content) {
    if ((this.page.outputPath || "").endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });

      return minified;
    }

    // If not an HTML output, return content as-is
    return content;
  });
  
  return {
    templateFormats: ['html', 'liquid', 'md', 'njk'],
    dir: {
      input: "src",
      output: "dist"
    }
  };
}