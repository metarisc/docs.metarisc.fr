---
title: Recherche
date: 2026-04-20
layout: layouts/post.liquid
---
## Recherche rapide

Vous pouvez accéder à la recherche à partir de n'importe quel endroit sur Metarisc, soit en tapant un libellé directement, soit en cliquant sur la loupe afin d'accéder à la recherche avancé.

![Zone recherche](https://metarisc-docs.s3.fr-par.scw.cloud/app/commun/recherche/69e62a939fcc8.png)

## Recherche avancé

### Rechercher un ERP

Une série de filtre vous est proposé :
- Libellé : nom de l'ERP
- Références Extérieures : identifiant qui provient de la reprise de donnée
- Catégorie : catégorie de l'ERP
- Type : classification du type de l'ERP
- Activé : activité de l'ERP
- Avis d'exploitation : favorable / défavorable
- Site géographique : [voir la section](#site-gographique)
- Commission concernée : [voir la section](#commission-concerne)
- Zone de recherche : [voir la section](#zone-de-recherche)
- Présence de locaux à sommeil : permet de filtrer les locaux à sommeil
- Afficher les cellules : permet d'afficher les cellules en plus des ERP


![Rechercher un ERP](https://metarisc-docs.s3.fr-par.scw.cloud/app/commun/recherche/69e62debf3132.png)

#### Site géographique

Les sites géographiques permettent de regrouper plusieurs EPR.

Exemple : un groupe scolaire peut regrouper plusieurs établissements scolaires.

![Site géographique](https://metarisc-docs.s3.fr-par.scw.cloud/app/commun/recherche/69e630ef6c3df.png)

#### Commission concernée

L'ERP étant rattaché à une commission, il est possible de filtrer dessus.

![Commission concernée](https://metarisc-docs.s3.fr-par.scw.cloud/app/commun/recherche/69e630fb1e97f.png)

#### Zone de recherche

Vous avez la possibilité d'effectuer une recherche en sélectionnant une zone géographique.

1. CLiquer sur le filtre ***Zone de recherche***

- Recherche par lieu

    2. Taper le lieu dans le champ de recherche, puis ***Recherche***
    3. Cliquer sur le bouton ***OSM*** afin de mettre en évidence la zone sur la carte

    ![Zone de recherche par zone](https://metarisc-docs.s3.fr-par.scw.cloud/app/commun/recherche/69e634551e320.png)

- Recherche par zone :

    2. A l'aide de la souris, dessiner un polygone
    3. Double cliquer pour fermer le polygone

    ![Zone de recherche par lieu](https://metarisc-docs.s3.fr-par.scw.cloud/app/commun/recherche/69e631049d3e8.png)

4. Cliquer sur ***Valider***, puis ***Rechercher***.

#### Exporter les résultats de la recherche

Vous avez la possiblité d'exporter vos résultats de recherche sur un tableur.

1. Dans la zone de recherche, cliquer sur le bouton ***Exporter***
2. Ouvrer un nouveau document dans votre tableur
3. Dans l'onglet ***Données***, cliquer sur ***A partir d'un fichier texte/CSV***
4. Sélectionner le document .csv téléchargé précédement, une fenêtre assistant importation s'ouvre
5. Vérifier ou modifier les choix de la manière suivante
    - Origine du fichier : *65001 unicode (utf-8)*, ce choix permettra une gestion correcte des accents
    - Délimiteur : *Virgules*
6. Puis le bouton ***Charger***

Les premières lignes du fichier reprennent la date de l'export, le nombre de lignes et les filtres.

### Rechercher un Site Géographique

![Rechercher un Site Géographique](https://metarisc-docs.s3.fr-par.scw.cloud/app/commun/recherche/69e62ed7bb454.png)