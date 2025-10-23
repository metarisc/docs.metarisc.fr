---
layout: layouts/sidebar.liquid
---

<h1 class="mb-4">
  Pagination
</h1>

L'API Metarisc fournit un système de pagination pour l'ensemble des points de terminaison donnant des listes de résultats. Par exemple, vous pouvez lister l'ensemble des PEI sur une zone, l'ensemble des utilisateurs liés à un dossier d'étude.

Ces points de terminaisons partagent une structure commune :

```json
{
    "data": [...],
    "meta": {
        "pagination": {
            "total": Nombre total d'objets. (int),
            "count": Nombre d'objets contenu dans la page courante (int),
            "per_page": Nombre d'objets pouvant être retournés par une page (int),
            "current_page": Numéro de la page courante (int),
            "total_pages": Nombres de pages disponibles (int)
        }
    }
}
```

Les réponses paginées représentent une page, triée grâce à une logique (sous réserve de l'existence du paramètre ```sort```).

Si vous ne spécifiez pas les paramètres ```page``` et ```per_page```, vous recevrez la première page contenant les 25 premiers éléments. Vous pouvez configurer ```page``` et ```per_page``` dans les paramètres de requête.