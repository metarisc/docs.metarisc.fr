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

```json
{
	"date": "22\/03\/2025 à 21:59:17",
	"organisation": "SDIS62",
    "dossier.type": "erp:visite_avant_ouverture",
	"dossier.objet": "Reclassement : types X - L de 2ème catégorie\r\nUE : Véhicules de la libération les 18 et 19.05.2019",
	"dossier.informations.numero_urba": "AT620000",
    "dossier.informations.service_instructeur": "MAIRIE ARRAS",
	"dossier.rapport_etude.documents_techniques": [
		{
			"libelle": "Plans"
		}
	],
	"dossier.rapport_etude.textes_applicables": [
		{
			"texte": "25 juin 1980"
		}
	],
	"dossier.rapport_etude.prescriptions": [
		{
			"numero": 1,
			"contenu": "Permettre l'évacuation du public et faciliter l'intervention des secours par la mise en place d'un éclairage de sécurité assurant les fonctions \"d'évacuation et d'ambiance ou antipanique\". \r\nCet éclairage doit être assuré :\r\n- soit par des blocs autonomes d'éclairage de sécurité ;\r\n- soit par une (arrêté du 19 novembre 2001) \"source centralisée\" ;\r\n- soit par la combinaison d'une (arrêté du 19 novembre 2001) \"source centralisée\" et de blocs autonomes.\r\n\r\n «L'éclairage d'évacuation» doit permettre à toute personne d'accéder à l'extérieur de l'établissement à l'aide de foyers lumineux assurant la signalisation des issues.\r\n\r\n",
			"type": "liee_a_l_exploitation"
		}
	],
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
    "commission.observations": "Observations ..."
}
```