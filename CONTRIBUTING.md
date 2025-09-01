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

## Structure de la documentation

### Organisation des fichiers

```
src/
├── _data/
│   ├── docs_dev.yml          # Navigation principale
│   ├── api_versions.js       # Versions de l'API REST
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