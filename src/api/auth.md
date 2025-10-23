---
layout: layouts/sidebar.liquid
---

<h1 class="mb-4">
  Authentification par tokens d’accès
</h1>

Pour intérargir avec l'API Metarisc, vous devez enregistrer votre application. L'authentification Metarisc utilise OpenID Connect, un standard ouvert utilisé par beaucoup de fournisseurs d'API. OpenID Connect permet aux utilisateurs d'autoriser votre application sans donner leur mot de passe.

Les tokens d’accès permettent à votre application d’accéder à l’API Metarisc. Presque tous les points de terminaison de l’API Metarisc exigent un token d’accès. Votre demande peut donc en nécessiter un chaque fois que vous accédez à un point de terminaison. Ils remplissent généralement deux fonctions :
- Ils permettent à votre application d’accéder aux informations d’un utilisateur sans avoir besoin du mot de passe de ce dernier ; Par exemple, votre application a besoin de l’e-mail d’un utilisateur pour exécuter une fonction.
- Ils nous permettent d’identifier votre application, son utilisateur et le type de données que celui-ci permet à votre application de consulter.

Tous les appels à l'API Metarisc doivent se faire en HTTPS. Les appels en HTTP échoueront.