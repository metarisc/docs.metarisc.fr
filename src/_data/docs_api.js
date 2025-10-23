const EleventyFetch = require("@11ty/eleventy-fetch");
const yaml = require("js-yaml");

function slugify(text) {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-');
}

module.exports = async function () {
    // Charger et parser le fichier OpenAPI
    const d = await EleventyFetch("https://raw.githubusercontent.com/metarisc/openapi/refs/heads/main/openapi.yaml", {
		duration: "1200s",
		type: "text"
	});

    const openapi = yaml.load(d);

    const data = {
        items: [
            {
                title: "Généralités",
                items: [
                    {
                        text: "Introduction",
                        url: "/api/introduction"
                    },
                    {
                        text: "Authentification",
                        url: "/api/auth"
                    },
                    {
                        text: "Organisation connectée",
                        url: "/api/org"
                    },
                    {
                        text: "Gestion des erreurs",
                        url: "/api/errors"
                    },
                    {
                        text: "Limitation du débit",
                        url: "/api/rate-limiting"
                    },
                    {
                        text: "Formats des dates",
                        url: "/api/dates-format"
                    },
                    {
                        text: "Paramètres des requêtes",
                        url: "/api/params"
                    },
                    {
                        text: "Pagination",
                        url: "/api/pagination"
                    }
                ]
            },
        ]
    };

    // Générer les groupes depuis OpenAPI
    if (openapi["x-tagGroups"]) {
        for (const group of openapi["x-tagGroups"]) {
            const groupItem = {
                title: group.name,
                collapsible: true,
                collapseId: `submenu-${slugify(group.name)}`,
                items: []
            };

            for (const tag of group.tags) {
                const tagAPI = tag.replace(' API', '');
                const tagSlug = slugify(tagAPI);
                const tagUrl = `/api/${tagSlug}`;

                const tagItem = {
                    title: tag,
                    collapsible: true,
                    collapseId: `submenu-ops-${tagSlug}`,
                    items: [
                        {
                            text: "Page de présentation",
                            url: tagUrl
                        }
                    ]
                };

                // Parcourir les paths pour trouver les opérations de ce tag
                for (const [pathUrl, pathItem] of Object.entries(openapi.paths)) {
                    for (const [method, operation] of Object.entries(pathItem)) {
                        if (typeof operation !== 'object' || !operation.tags) continue;
                        
                        const pageTag = operation.tags[0].replace(' API', '');
                        if (pageTag !== tagAPI) continue;

                        const operationIdSlug = slugify(operation.summary);
                        tagItem.items.push({
                            text: operation.summary,
                            url: `${tagUrl}/#${operationIdSlug}`
                        });
                    }
                }

                groupItem.items.push(tagItem);
            }

            data.items.push(groupItem);
        }
    }

    return data;
};