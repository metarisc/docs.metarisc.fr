module.exports = function(eleventyConfig) {

    // Configuration par défaut
    const defaultConfig = {
        defaultEnvironments: ['', 'preview'],
        permalinkPattern: "{{ currentEnv }}/{{ page.filePathStem }}.{{ page.outputFileExtension }}",
        alias: 'currentEnv'
    };

    // Plugin principal
    eleventyConfig.addPlugin(function(eleventyConfig, options = {}) {
        const config = { ...defaultConfig, ...options };

        // Hook pour modifier les données de la page avant le rendu
        eleventyConfig.addGlobalData("eleventyComputed", {

            // Injecter automatiquement la pagination si environments est défini
            // Actuellement, la pagination ne peut pas être manipulée avec eleventyComputed ("The only special key you can define in computed data is permalink." https://www.11ty.dev/docs/data-configuration/)
            // Donc ce bloc de code est inutile tant qu'eleventy ne permet pas de manipuler la pagination.
            // A défaut, la pagination devra toujours être définie manuellement dans les données de la page.
            pagination: function(data) {
                if (data.environments !== undefined && !data.pagination) {
                    return {
                        data: "environments",
                        size: 1,
                        alias: config.alias
                    };
                }
                return data.pagination;
            },

            // Injecter automatiquement le permalink si environments est défini
            permalink: function(data) {
                if (data.environments !== undefined && !data.permalink) {
                    return config.permalinkPattern;
                }
                return data.permalink;
            },

            // Calculer l'environnement actuel basé sur la pagination existante
            currentEnv: function(data) {
                // Si pagination existe déjà et utilise environments
                if (data.pagination && data.pagination.alias === config.alias) {
                    return data[config.alias] || '';
                }
                return data.currentEnv;
            }

        });
    });

    return {
        // Exposer la configuration pour les autres plugins
        getConfig: () => config
    };
};