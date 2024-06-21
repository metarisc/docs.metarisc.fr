const sass = require("eleventy-sass");
const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(sass);

  eleventyConfig.addDataExtension('yml', contents => yaml.safeLoad(contents))

  // Copy files and dir folders to the output
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/scripts");
  eleventyConfig.addPassthroughCopy("src/error.html");
  
  return {
    templateFormats: ['html', 'liquid', 'md', 'njk'],
    dir: {
      input: "src",
      output: "dist"
    }
  };
}