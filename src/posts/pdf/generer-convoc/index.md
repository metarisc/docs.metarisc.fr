---
title: Générer un procès verbal
date: 2025-03-21
layout: layouts/post.liquid
---

## Générer un procès verbal de la commission de sécurité

Le procès verbal est le document officiel de la commission de sécurité remis à l’autorité de police compétente.
Il contient l’avis unique prononcé, exprimant la position collégiale de la commission. Il est signé du président.
Ce document permet au maire de prendre connaissance de l’avis de la commission et ainsi de prendre une décision.

{%
    render 'alert',
    level: 'info',
    text: "Metarisc n'est pas capable à ce jour de signer électroniquement les PDF générés. Ils nécessitent donc d'être imprimés pour pouvoir être signés."
%}

### Clés disponibles pour les champs de fusion

- ```date``` : Date de génération
- ```erp_commune``` : Commune de l'ERP
- ```erp_libelle``` : Libellé de l'ERP
- ```erp_adresse``` : Adresse de l'ERP
- ```dossier_objet``` : Objet du dossier
- ```dossier_numeroat``` : Numéro d'urbanisme
- ```dossier_demandeur``` : Demandeur du dossier
- ```dossier_serviceinstructeur``` : Service instructeur du dossier
- ```erp_type``` : Type d'activité de l'ERP
- ```erp_activite``` : Type d'activité de l'ERP
- ```erp_categorie``` : Catégorie de l'ERP
- ```dossier_re_obs``` : Observations du rapport d'étude
- ```dossier_re_avis``` : Avis du rapport d'étude
- ```dossier_re_avis_obs``` : Analyse de risque
