---
title: Générer un compte-rendu
date: 2025-03-21
layout: layouts/post.liquid
---

## Générer un compte-rendu de la commission de sécurité

Le compte rendu résume le contenu de la réunion. Il précise notamment la position individuelle de chaque membre. 
Etabli à l’issue de la réunion, il est signé du président de séance, approuvé par les membres et conservé au dossier par le SDIS.

{%
    render 'alert',
    level: 'info',
    text: "Metarisc n'est pas capable à ce jour de signer électroniquement les PDF générés. Ils nécessitent donc d'être imprimés pour pouvoir être signés."
%}

### Clés disponibles pour les champs de fusion

```json
{
	"date": "22\/03\/2025 à 21:59:17",
	"organisation": "SDIS62",
    "dossier.type": "erp:visite_avant_ouverture",
	"dossier.objet": "Reclassement : types X - L de 2ème catégorie\r\nUE : Véhicules de la libération les 18 et 19.05.2019",
	"dossier.informations.numero_urba": "AT620000",
    "dossier.informations.service_instructeur": "MAIRIE ARRAS",
    "erp.commune": "LOCON",
	"erp.adresse": "RUE VICTOR GENEL 62400 LOCON",
	"erp.libelle": "Salle omnisports",
	"erp.categorie_actuelle": 2,
	"erp.type_activite_principal_actuel": "X - Salles omnisports",
	"erp.types_activites_secondaires_actuels": [
		{
			"type": "Aucune activité secondaire"
		}
	],
	"erp.effectif_public_total_actuel": 720,
	"erp.effectif_personnel_total_actuel": 1,
    "commission.avis": "Favorable",
    "commission.observations": "Observations ...",
    "commission.membres": [
		{
			"titre": "POLICE"
		}
	],
}
```