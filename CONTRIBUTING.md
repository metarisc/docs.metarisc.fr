# Guide de contribution à la documentation Metarisc

Merci de votre intérêt pour contribuer à la documentation de Metarisc ! Ce guide vous explique comment écrire et proposer des améliorations à la documentation.

## Prérequis

Pour contribuer à cette documentation, vous devez avoir des connaissances techniques de base en développement, notamment :

- Familiarité avec Git et GitHub
- Connaissances de base en Markdown
- Notions de HTML/CSS (optionnel, pour les modifications avancées)
- Expérience avec Node.js et npm

## Architecture technique

La documentation Metarisc utilise :

- **[Eleventy (11ty)](https://www.11ty.dev/)** : Générateur de site statique
- **Hébergement** : [Scaleway](https://scaleway.com/)
- **Templating** : Liquid avec support Markdown
- **Styles** : SASS avec Bootstrap 5
- **Navigation** : Gérée via les fichiers dans `src/_data/`

## Configuration de l'environnement local

### 1. Cloner le repository

```bash
git clone https://github.com/metarisc/docs.metarisc.fr.git
cd docs.metarisc.fr
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer le serveur de développement

```bash
npm run serve
```

Le site sera accessible à l'adresse `http://localhost:8000`. Les modifications seront automatiquement rechargées.

### 4. Générer le site (optionnel)

```bash
npm run generate
```

Cette commande génère les fichiers statiques dans le dossier `dist/`.

**Note :** Si vous rencontrez des erreurs liées à l'API GitHub (`Bad response for https://api.github.com/repos/metarisc/openapi/branches (403): Forbidden`), consultez la section [Dépannage](#dépannage) ci-dessous.

## Structure de la documentation

### Organisation des fichiers

```
src/
├── _data/
│   ├── docs_dev.yml          # Navigation principale
│   ├── api_versions.js       # Versions de l'API
│   └── versions.yml          # Métadonnées des versions
├── _includes/
│   ├── layouts/              # Templates de page
│   └── *.liquid             # Composants réutilisables
├── posts/                    # Contenu de la documentation
│   ├── intro/               # Pages d'introduction
│   ├── erp/                 # Documentation ERP
│   ├── deci/                # Documentation DECI
│   ├── pdf/                 # Génération de PDF
│   └── ...
└── index.liquid             # Page d'accueil
```

### Navigation

La navigation du site est définie dans `src/_data/docs_dev.yml`. Pour ajouter une nouvelle page :

1. Créez le fichier Markdown dans le dossier approprié sous `src/posts/`
2. Ajoutez l'entrée correspondante dans `docs_dev.yml`

Exemple d'entrée dans `docs_dev.yml` :

```yaml
- title: Nouvelle section
  items:
    - text: Ma nouvelle page
      url: /posts/ma-section/ma-page
```

## Rédaction de documentation

### Format des pages

Chaque page de documentation est un fichier Markdown avec un en-tête YAML (front matter) :

```markdown
---
title: Titre de ma page
date: 2024-01-01
layout: layouts/post.liquid
---

# Titre de ma page

Contenu de la documentation en Markdown...
```

### Composants disponibles

#### Alertes

Utilisez le composant `alert` pour afficher des messages importants :

```liquid
{%
    render 'alert',
    level: 'info',
    text: "Votre message d'information"
%}
```

Niveaux disponibles : `info`, `warning`, `danger`, `success`

#### Liens et navigation

- Utilisez des liens relatifs : `/posts/ma-section/ma-page`
- Les liens externes doivent avoir `target="_blank"`

#### Images

Stockez les images dans `src/img/` et référencez-les ainsi :

```markdown
![Description](https://metarisc-docs.s3.fr-par.scw.cloud/images/dossier/image.png)
```

### Guidelines de rédaction

1. **Clarté** : Utilisez un langage simple et précis
2. **Structure** : Organisez le contenu avec des titres hiérarchiques
3. **Exemples** : Incluez des exemples concrets et des captures d'écran
4. **Cohérence** : Respectez la terminologie utilisée dans Metarisc
5. **Accessibilité** : Utilisez des textes alternatifs pour les images

## Ajouter une nouvelle page

### 1. Créer le fichier

Créez un nouveau dossier et fichier sous `src/posts/` :

```bash
mkdir -p src/posts/ma-section/ma-nouvelle-page
touch src/posts/ma-section/ma-nouvelle-page/index.md
```

### 2. Rédiger le contenu

Ajoutez le front matter et le contenu :

```markdown
---
title: Ma nouvelle page
date: 2024-01-01
layout: layouts/post.liquid
---

# Ma nouvelle page

Contenu de votre documentation...
```

### 3. Ajouter à la navigation

Modifiez `src/_data/docs_dev.yml` pour inclure votre page :

```yaml
- title: Ma section
  items:
    - text: Ma nouvelle page
      url: /posts/ma-section/ma-nouvelle-page
```

## Tester vos modifications

### 1. Vérification locale

- Démarrez le serveur de développement : `npm run serve`
- Naviguez vers `http://localhost:8000`
- Vérifiez que votre page s'affiche correctement
- Testez la navigation et les liens

### 2. Build de production

```bash
npm run generate
```

Vérifiez qu'il n'y a pas d'erreurs de build.

## Processus de contribution

### 1. Fork et branche

1. Forkez le repository sur GitHub
2. Clonez votre fork localement
3. Créez une branche pour votre contribution :

```bash
git checkout -b feature/ma-nouvelle-fonctionnalite
```

### 2. Développement

1. Effectuez vos modifications
2. Testez localement
3. Commitez vos changements :

```bash
git add .
git commit -m "docs: ajout de la documentation pour [fonctionnalité]"
```

### 3. Pull Request

1. Poussez votre branche :

```bash
git push origin feature/ma-nouvelle-fonctionnalite
```

2. Ouvrez une Pull Request sur GitHub
3. Décrivez clairement vos modifications
4. Attendez la review et les commentaires

### Conseils pour les Pull Requests

- **Titre clair** : Décrivez brièvement les modifications
- **Description détaillée** : Expliquez le contexte et l'objectif
- **Changements atomiques** : Une PR = un sujet/fonctionnalité
- **Tests** : Vérifiez que le site se build correctement

## Déploiement

Le site est automatiquement déployé sur Scaleway lors des merges sur la branche principale. Aucune action manuelle n'est nécessaire.

## Dépannage

### Erreur d'API GitHub lors du build

Si vous rencontrez l'erreur suivante lors de la génération :

```
Bad response for https://api.github.com/repos/metarisc/openapi/branches (403): Forbidden
```

Cela est dû à des limitations d'accès à l'API GitHub. Pour contourner temporairement ce problème :

1. Sauvegardez le fichier original :
```bash
cp src/_data/api_versions.js src/_data/api_versions.js.bak
```

2. Modifiez temporairement `src/_data/api_versions.js` :
```javascript
// Temporarily disabled API fetch for testing
module.exports = async function () {
	return [];
};
```

3. Lancez votre build ou serveur de développement
4. Restaurez le fichier original avant de commiter :
```bash
mv src/_data/api_versions.js.bak src/_data/api_versions.js
```

### Problèmes de dépendances

Si vous rencontrez des erreurs lors de `npm install`, essayez :

```bash
rm -rf node_modules package-lock.json
npm install
```

## Ressources

- [Documentation Eleventy](https://www.11ty.dev/docs/)
- [Syntaxe Markdown](https://www.markdownguide.org/)
- [Bootstrap 5](https://getbootstrap.com/docs/5.0/)
- [Liquid Template Language](https://shopify.github.io/liquid/)

## Besoin d'aide ?

Si vous rencontrez des difficultés ou avez des questions :

1. Consultez les issues existantes sur GitHub
2. Ouvrez une nouvelle issue avec le label `question`
3. Regardez les exemples existants dans le repository

Merci pour votre contribution à l'amélioration de la documentation Metarisc !