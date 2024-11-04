---
title: Déclaration externe
date: 2023-01-01
layout: layouts/post.liquid
---
# Déclarer un point d'eau incendie avec un compte *invité* #


{%
    render 'alert',
    level: 'info',
    text: "
    **_INFO_**

Il s'agit d'un espace réservé de l'application METARISC où les acteurs publics et partenaires des services d'incendie et de secours (SIS) ont accès à une plateforme d'échanges de données et de travail collaboratif.
   
Le partenaire effectue une démarche de déclaration   des points d'eau servant à la défense extérieure contre l'incendie. 

Exemples:
- une commune déclare les poteaux d'eau situés sur son territoire, 
- un exploitant agricole déclare un point d'eau naturel ou artificiel situé sur son exploitation.

Le point d'eau nouvellement déclaré reste en statut *En attente de validation*. A la suite de cette procédure, le service d'incendie et secours effectue ses démarches de contrôle afin de renseigner la disponiblité du PEI"
%}



1.  Depuis le site metarisc.fr, accéder à l'application.
2.  Créer un compte.
3.  Demander sa validation auprès de votre contact au sein du service d'incendie et de secours pour être associer à une organisation. 
   En tant que compte invité par une organisation, exemple un service d'incendie et de secours, votre compte gardera le statut *Invité*.
   
4. Depuis la barre larérale gauche, accéder au menu **DECI - Déclarer un PEI** 
5. Dans l'espace de travail, cliquer sur **Commencer la déclaration**
   
![Décmaration externe 01](https://metarisc-docs.s3.fr-par.scw.cloud/images/DECI/Declaration%20externe%2001_1024.jpg)
   
5. Afficher la position géographique du point d'eau, soit:
   -    en entrant une adresse dans la barre de recherche,
   -    en navigant dans la carte.
6. Cliquer sur la carte pour positionner le point d'eau. La position est matérialisée par un pictogramme sur la carte. Plusieurs points d'eau peuvent être créés en même temps. La liste des PEI en cours de création apparait dans un encart à droite de l'écran.

7. Cliquer sur **Modifier** pour accéder au formulaire de création

![Déclaration externe 02](https://metarisc-docs.s3.fr-par.scw.cloud/images/DECI/Declaration%20externe%2002_1024.jpg)


8. Compléter le formulaire **Implantation**, puis cliquer sur **Suivant**
{%
    render 'alert',
    level: 'info',
    text: "
    **_INFO_**

    L'application vous propose par défaut 5 adresses à proximité du point géographique. Si toutefois, les adresses proposées ne correspondaient pas, vous avez la possibilité de modifier manuellement l'adresse.

    La localisation opérationnelle vous permet d'apporter des informations complémentaires afin de préciser la localisation de l'objet.

%}

![Déclaration externe 03](https://metarisc-docs.s3.fr-par.scw.cloud/images/DECI/Declaration%20externe%2003_1024.jpg)


9. Compléter le formulaire **Descriptif** et les caractéristiques hydrauliques, puis cliquer sur **Suivant**
    Le formulaire **Caractéristiques hydrauliques** est dynamique et évolue selon la nature du point d'eau (PIBI, PENA).

10. Téléverser les documents necessaires à l'instruction de la déclaration du point d'eau. Il peut s'agir de photos, plans, fiches techniques... 
    
    L'**annexe norme** doit obligatoirement être ajouté afin de pouvoir finaliser la déclaration: 
    - Poteau ou bouche d’incendie : Annexe A ou B de la norme NFS 62-200 
    - Citerne Souple :Annexe A des normes NFS 62-250 & NFS 62-240
    - Autre citerne avec dispositif d’aspiration : Annexe A norme NFS 62-240
    - Point d’aspiration équipé d’un dispositif d’aspiration :Annexe A norme NFS 62-240
  

 
 
11. Terminer, puis confirmer les informations renseignées.    
![décaration externe 04](https://metarisc-docs.s3.fr-par.scw.cloud/images/DECI/Declaration%20externe%2004_1024.jpg)

12. De retour sur la première page du module de déclaration des points d'eau et la liste des PEI en cours de déclaration, vous pouvez, le cas échéant, compléter les informations relatives aux autres PEI (1) ou finaliser la déclaration (2). 

    Un encart s'ouvre pour finaliser la déclaration et l'application vous confirme l'enregistrement du point d'eau.

![Déclaration externe 05](https://metarisc-docs.s3.fr-par.scw.cloud/images/DECI/Declaration%20externe%2005_1024.jpg)

Un point d'eau déclaré par un compte invité reste avec le statut *"Déclaration en cours"*.
Une notification est envoyée au service d'incendie et de secours qui procédera aux démarches de contrôle de ce point d'eau.
