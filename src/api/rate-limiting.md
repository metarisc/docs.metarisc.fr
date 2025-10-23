---
layout: layouts/sidebar.liquid
---

<h1 class="mb-4">
  Rate Limiting
</h1>

Le Rate Limiting - ou limitation du taux - bloque les utilisateurs, les bots ou les applications qui sur-utilisent l'API Metarisc ou l'utilisent abusivement.

La limitation du taux est basée sur une combination des suivi des adresses IP ainsi que les identifiants des utilisateurs Metarisc dont proviennent les requêtes et sur le temps écoulé entre chaque requête.

Une solution de Rate Limiting mesure le temps entre chaque requête de chaque adresse IP et mesure également le nombre de requêtes dans un délai spécifié. S'il y a trop de requêtes provenant d'une même adresse IP dans le délai imparti, la solution de Rate Limiting ne répondra pas aux requêtes de l'adresse IP pendant un certain temps.

Les entêtes liées au Rate Limiting (RateLimit-Limit, RateLimit-Remaining, and RateLimit-Reset) sont basées sur [RateLimit header fields for HTTP Internet-Draft](https://datatracker.ietf.org/doc/draft-ietf-httpapi-ratelimit-headers).