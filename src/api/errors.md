---
layout: layouts/sidebar.liquid
---

<h1 class="mb-4">
  Gestion des erreurs
</h1>

L'API Metarisc utilise les codes de réponse HTTP conventionnels pour indiquer si une requête HTTP a été exécutée avec succès ou non. En général : Les codes 2xx indiquent un succès. Les codes 4xx indiquent une erreur côté client (un paramètre requis non donné, etc ..). Les codes 5xx indiquent une erreur avec le service Metarisc.

Certains codes 4xx peuvent être gérés par l'application elle même, l'API Metarisc donne un code d'erreur qui décrit brièvement l'erreur levée.

Les erreurs retournées par Metarisc suivent la [RFC 7807](https://www.rfc-editor.org/rfc/rfc7807). Les erreurs peuvent avoir ces propriétés :

- type (string) : Une référence Uri qui identifie le type de problème ;
- title (string) : Un résumé du type d'erreur rencontré :
- status_code (int) : le code de réponse HTTP généré par l'API Metarisc ;
- detail (string) : La description complète de l'erreur rencontrée ;