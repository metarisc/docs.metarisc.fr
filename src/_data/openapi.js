const EleventyFetch = require("@11ty/eleventy-fetch");
const yaml = require("js-yaml");
const refRes = require("@json-schema-tools/reference-resolver");

module.exports = async function () {
	// fetch the OpenAPI spec from Metarisc OpenAPI repo
	const data = await EleventyFetch("https://raw.githubusercontent.com/metarisc/openapi/refs/heads/main/openapi.yaml", {
		duration: "0s",
		type: "text"
	});

	// Parse the YAML content
	let openapi = yaml.safeLoad(data);

	// Dereference $ref in the OpenAPI spec so we can easily access all operations and tags
	// without having to resolve $ref at runtime.
	openapi = await expandRefs(openapi);

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

// Recursively expand $ref in an object using @json-schema-tools/reference-resolver
const expandRefs = async (schema, maxEvalsPerObj = 100) => {
	const recExpandRefs = async (obj, visited = new Map()) => {
		// Handle null/undefined
		if (!obj) {
			return obj;
		}

		// Handle circular references
		if (visited.has(obj) && visited.get(obj) > maxEvalsPerObj) {
			return obj;
		}
		visited.set(obj, (visited.get(obj) || 0) + 1);

		// Handle arrays
		if (Array.isArray(obj)) {
			let expandedArray = obj.map(async (item) => {
				return await recExpandRefs(item, visited);
			});
			return await Promise.all(expandedArray);
		}

		// Handle objects
		if (typeof obj === "object") {
			let expanded = {};

			for (const [key, value] of Object.entries(obj)) {
				if (key === "$ref" && typeof value === "string") {
					// Resolve the reference and recursively expand any nested refs
					let resolved = value;
					try {
						resolved = await refRes.default.resolve(value, schema);
					} catch (e) {
						console.error(`Failed to resolve reference: ${value}`, key, value);
						console.error(e);
					}
					expanded = await recExpandRefs(resolved, visited);
					
				} else if (typeof value === "object") {
					// Recursively expand nested objects/arrays
					expanded[key] = await recExpandRefs(value, visited);
				} else {
					// Copy primitive values as-is
					expanded[key] = value;
				}
			}

			return expanded;
		}

		// Return primitive values as-is
		return obj;
	};

	let schemaOnly = schema;
	return await recExpandRefs(schemaOnly);
};