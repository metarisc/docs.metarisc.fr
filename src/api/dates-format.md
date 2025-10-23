---
layout: layouts/sidebar.liquid
---

<h1 class="mb-4">
  Format des dates
</h1>

Les formats de date et d'heure causent beaucoup de problèmes de confusion et d'interopérabilité sur les services Internet. Cette section aborde les standards qu'utilise l'API Metarisc pour améliorer la cohérence et l'interopérabilité lors des représentations et des utilisations de la date et de l'heure.

La représentation numérique de la date, de l'heure, des durées et des intervales dans Metarisc suit la norme ISO 8601.

Exemple :
- Une date suit le format Y-m-d\TH:i:sP (exemple : 2024-11-20T09:47:48+00:00)
- Une période entre deux jours suit le format Y-m-d/Y-m-d (exemple : 2024-01-01/2024-12-31)

 Les dates formatées avec +00:00 indiquent des heures UTC.