---
title: Générer un rapport
date: 2025-03-21
layout: layouts/post.liquid
---

##  Génération d'un rapport

Les PDF générés par Metarisc s'appuient sur des documents ODT modèles contenants des balises "champs de fusion".

Un champ de fusion est un champ de personnalisation fourni par un contexte de génération.

### Le fichier modèle

Un fichier modèle est un document ODT qui est créé par un administrateur d'une Organisation Metarisc.

Il est à intégrer dans les préférences d'une commission d'une sécurité, ou plus globalement dans les paramètres d'une Organisation.

Le document modèle contient des champs de fusion qui seront remplacés par Metarisc par les valeurs adéquates.

### Champs de fusion

Un champ de fusion est une syntaxe particulière à placer dans vos modèles afin de créer des dates, des champs textes dynamiques, des qrcode etc ....

Il existe deux type de champ de fusion : des segments et des tags.

Les segments sont des générateurs de blocs dans lesquels se trouvent d'autres champs de fusion.

Des tags sont des champs qui seront remplacés par Metarisc avec une logique pré-définie par le tag utilisé.

Les champs de fusion doivent être branchés sur une clé ("key") permettant d'être connecté à une valeur donnée.

Voici l'ensemble des champs de fusion disponibles.

#### Segments

##### Condition

Le champ de fusion "Condition" permet de conditionner la génération du contenu.

```
[IF key]
[/IF key]
```

##### Segment

Le champ de fusion "Segment" permet de grouper d'autres champs de fusion en bouclant sur une liste d'éléments.

```
[SEGMENT key]
[/SEGMENT key]
```

#### Tags

##### Date

Le champ de fusion "Date" permet de générer une date française.

```
{date:key}
```

##### Field

Le champ de fusion "Field" permet de générer un texte dynamique.

```
{field:key}
```

##### Image

Le champ de fusion "Image" permet de générer des images à partir d'une URL.

```
{image:key}
```

##### QrCode

Le champs de fusion "QrCode" permet de générer un QrCode.

```
{qrcode:key,size:150}
```

Options disponibles :
- size : La taille en pixel du QrCode ;
- margin : La marge en pixel à appliquer sur le QrCode ;