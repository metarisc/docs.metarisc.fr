const sass = require("eleventy-sass");
const yaml = require("js-yaml");
const htmlmin = require("html-minifier-terser");
const multiEnvironmentPlugin = require('./plugins/environment.js');
const openapiPlugin = require('./plugins/openapi.js');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(sass);

  eleventyConfig.addDataExtension('yml', contents => yaml.load(contents))

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

  // Multi-environment plugin
  eleventyConfig.addPlugin(multiEnvironmentPlugin, {
    defaultEnvironments: ['', 'preview', 'staging'],
    permalinkPattern: "{{ currentEnv }}/{{ page.filePathStem }}.{{ page.outputFileExtension }}",
    alias: 'currentEnv'
  });

  // Multi-environment plugin
  eleventyConfig.addPlugin(openapiPlugin);

  return {
    templateFormats: ['html', 'liquid', 'md', 'njk'],
    dir: {
      input: "src",
      output: "dist"
    }
  };
}