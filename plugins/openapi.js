const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {

    // Plugin principal
    eleventyConfig.addPlugin(function(eleventyConfig) {

        eleventyConfig.addFilter("enumDesc", function(description) {
            description = description.trim();
            
            const regex = /^(.+?)\n\nValeurs possibles :\s*\n((?:\s*\*\s+.+\s+:\s+.+\n?)+\.)$/s;
            const match = description.match(regex);
            if (!match) {
                throw new Error(`La description ne correspond pas au format attendu : ${description}`);
            }

            const [, mainDescription, bulletList] = match;

            // Extraire les valeurs de la liste à puces
            const bulletRegex = /\*\s+((?:.\:*)+?)\s*:(.*\.)/g;
            const bulletValues = [];
            let bulletMatch;
            
            while ((bulletMatch = bulletRegex.exec(bulletList)) !== null) {
                bulletValues.push({
                    value: bulletMatch[1].trim(),
                    desc: bulletMatch[2].trim()
                });
            }

            return [
                mainDescription.trim(),
                bulletValues
            ];
        });

        eleventyConfig.addFilter("parameters", function(parameters) {
            parametersFiltered = parameters.filter((parameter) => {
                return parameter.in === 'query'
                    && parameter.name !== 'page'
                    && parameter.name !== 'per_page'
                    && parameter.name !== 'sort';
            });
            return parametersFiltered.sort((a, b) => {
                if (a.required && !b.required) return -1;
                if (!a.required && b.required) return 1;
                return a.name.localeCompare(b.name);
            });
        });

        eleventyConfig.addFilter("moreParameters", function(parameters) {
            parametersFiltered = parameters.filter((parameter) => {
                return parameter.in === 'query'
                    && (parameter.name == 'page' || parameter.name == 'per_page' || parameter.name == 'sort');
            });
            return parametersFiltered.sort((a, b) => {
                if (a.required && !b.required) return -1;
                if (!a.required && b.required) return 1;
                return a.name.localeCompare(b.name);
            });
        });
        
        // add tag to generate unique ids for headings
        eleventyConfig.addFilter("uniqueId", function(value) {
            return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') + '-' + Math.random().toString(36).substr(2, 9);
        });

        // markdownify a string with markdown-it
        const md = new markdownIt();
        eleventyConfig.addFilter("markdownify", function(value) {
            if(!value) return undefined;
            return md.render(value);
        });
        
    });

    return {
        // Exposer la configuration pour les autres plugins
        getConfig: () => config
    };
};