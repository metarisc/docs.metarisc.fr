const sass = require("eleventy-sass");
const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(sass);

  eleventyConfig.addDataExtension('yml', contents => yaml.safeLoad(contents))

  // Copy the `img` folders to the output
  eleventyConfig.addPassthroughCopy("src/img");
    
  // Copy error page
  eleventyConfig.addPassthroughCopy("src/error.html");
  
  return {
    templateFormats: ['html', 'liquid', 'md', 'njk'],
    dir: {
      input: "src",
      output: "dist"
    }
  };
}