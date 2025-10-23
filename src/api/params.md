---
layout: layouts/sidebar.liquid
---

<h1 class="mb-4">
  Paramètres de requête
</h1>

Les paramètres de requête (*query params*) sont un ensemble défini de paramètres (paire clé-valeur) attachés à la fin d'une URL utilisée pour fournir des informations supplémentaires à l'API Metarisc lors des requêtes.
Ces paramètres sont généralement facultatifs.
La documentation de chaque point de terminaison de l'API Metarisc décrira tous les paramètres de requête qu'il prend en charge.

Exemple :

```https://api.metarisc.fr/dossiers?page=2&tags=hors_delai&tags=platau```

Dans cet exemple, nous avons trois paramètres de requête pour une recherche de dossiers :
- Le numéro de page ```page``` demandé ;
- Les tags ```hors_delai``` et ```platau``` permettant de filtrer la recherche.

Ces paramètres peuvent être utilisés par Metarisc pour traiter la demande en la personnalisant.