const EleventyFetch = require("@11ty/eleventy-fetch");
const yaml = require("js-yaml");
const $RefParser = require("@apidevtools/json-schema-ref-parser");

module.exports = async function () {
	// fetch the OpenAPI spec from Metarisc OpenAPI repo
	const data = await EleventyFetch("https://raw.githubusercontent.com/metarisc/openapi/refs/heads/main/openapi.yaml", {
		duration: "0s",
		type: "text"
	});

	// Parse the YAML content
	let openapi = yaml.load(data);

	// Dereference $ref in the OpenAPI spec so we can easily access all operations and tags
	// without having to resolve $ref at runtime.
	openapi = await $RefParser.dereference(openapi, {
		dereference: {
			excludedPathMatcher: (path) => {
				// Exclude circular references in "etablissement_rattache" to avoid infinite loop
				return path.includes("etablissement_rattache");
			},
		}
	});

	// get all operations tags
	const tags = new Set();
	for (const path of Object.values(openapi.paths)) {
		for (const operation of Object.values(path)) {
			if (operation.tags) {
				operation.tags.forEach((tag) => tags.add(tag.replace(" API", "")));
			}
		}
	}
	openapi.operationsTags = Array.from(tags).sort();

	return openapi;
};