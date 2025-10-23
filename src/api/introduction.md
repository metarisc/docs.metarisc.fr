---
layout: layouts/sidebar.liquid
---

<h1 class="mb-4">
  Introduction à l'API
</h1>

Metarisc API est construite autour de REST. L'API a des URL orientées ressources, accepte des corps de requête encodés JSON, renvoie des réponses encodées JSON et utilise des codes de réponse et des verbes HTTP standards.

Tous les transferts de données sont conformes au protocole HTTP 1.1 et tous les points de terminaison nécessitent le protocole HTTPS. Puisque l’API Metarisc est basée sur le protocole HTTP, elle est compatible avec tous les langages qui ont une bibliothèque HTTP, comme cURL.

Metarisc API ne supporte pas les mises à jour en masse. Vous ne pouvez travailler qu'avec un objet par requête.