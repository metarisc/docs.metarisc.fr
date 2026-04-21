---
title: Introduction
date: 2026-04-17
layout: layouts/post.liquid
---

Les PDF générés par Metarisc s'appuient sur des documents **ODT** modèles contenants des balises "champs de fusion".

Un champ de fusion est un champ de personnalisation fourni par un contexte de génération.

## Le fichier modèle

Un fichier modèle est un document **ODT** qui est créé par un administrateur d'une organisation Metarisc.

Il est à intégrer dans les préférences d'une commission de sécurité ou plus globalement dans les paramètres d'une organisation.

Le document modèle contient des champs de fusion qui seront remplacés par Metarisc par les valeurs adéquates.

## Champs de fusion

Un champ de fusion est une syntaxe particulière à placer dans vos modèles afin de créer des dates, des champs textes dynamiques, des images, des QrCodes, etc, ...

Il existe deux type de champ de fusion : des segments et des tags.

Les champs de fusion doivent être branchés sur une clé ("*key*") permettant d'être connecté à une valeur donnée.

Voici l'ensemble des champs de fusion disponibles.

### Segments

Les segments sont des générateurs de blocs dans lesquels se trouvent d'autres champs de fusion.

#### Condition

Le champ de fusion "Condition" permet de conditionner la génération du contenu.

```
[IF key]
[/IF key]
```

#### Segment

Le champ de fusion "Segment" permet de grouper d'autres champs de fusion en bouclant sur une liste d'éléments.

```
[SEGMENT key]
[/SEGMENT key]
```

#### Table

La balise "Table" permet d'afficher un tableau en dupliquant chaque ligne dans le document.

Le champ doit être un tableau de tableaux associatifs, où chaque tableau associatif représente une ligne dans le tableau.

La dernière ligne du tableau doit être la ligne modèle, qui sera dupliquée pour chaque ligne de l’ensemble de données.

```
[TABLE key]
(...table...)
[/TABLE key]
```

### Tags

Des tags sont des champs qui seront remplacés par Metarisc avec une logique pré-définie par le tag utilisé.

#### Date

Le champ de fusion "Date" permet de générer une date française.

```
{date:key}
```

#### Field

Le champ de fusion "Field" permet de générer un texte dynamique.

```
{field:key}
```

#### Image

Le champ de fusion "Image" permet de générer des images à partir d'une URL.

```
{image:key}
```

#### QrCode

Le champs de fusion "QrCode" permet de générer un QrCode.

```
{qrcode:key,size:150}
```

Options disponibles :
- size : La taille en pixel du QrCode ;
- margin : La marge en pixel à appliquer sur le QrCode ;

#### MarkDown

Le champs de fusion "MarkDown" permet de rendre le contenu MarkDown.

```
{md:key}
```