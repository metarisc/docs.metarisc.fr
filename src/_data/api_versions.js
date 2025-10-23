const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
	return EleventyFetch("https://api.github.com/repos/metarisc/openapi/branches", {
		duration: "1200s",
		type: "json",
	});
};