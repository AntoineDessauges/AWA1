
# AWA1 - Projet

## Description
Dans le cadre du cours AWA1, j'ai réalisé un slider de produits comprenant des animations réaliser avec [Dynamics.js](http://dynamicsjs.com/).

## Rendu final
Il est possible de parcourir les produits grâce aux flèches de navigations et de cliquer sur un bouton pour avoir un affichage plus détailler du produit.

<img src="/doc/1.gif?raw=true">

> Affichage sous forme de gif, s'il ne marche correctement veuillez le consulter sur [Github](https://github.com/AntoineDessauges/AWA1) ou avec le [lien directe](https://i.imgur.com/QeT00e7.gifv) vers le fichier.

## Inspiration
Afin de trouver une idée d'animation, je me suis rendu sur le site de [Codrops](https://tympanus.net/codrops/) et j'ai choisi le projet [Elastic Circle Slideshow](https://tympanus.net/codrops/2016/01/27/elastic-circle-slideshow/) comme source d'inspiration.

<img src="/doc/2.gif?raw=true">

> Affichage sous forme de gif, s'il ne marche correctement veuillez le consulter sur [Github](https://github.com/AntoineDessauges/AWA1) ou avec le [lien directe](https://tympanus.net/Development/ElasticCircleSlideshow/) vers la démo de Codrops.

Je me suis uniquement inspirer du design, je n'ai pas repris de code. Mon projet a été entièrement codé par moi-même.

## Déploiement
Afin de déployer le projet, télécharger le depuis [Github](https://github.com/AntoineDessauges/AWA1) ou cloné le avec git grâce à la commande suivante ( en vous plaçant dans le dossier où vous voulez placer le projet) : `git clone https://github.com/AntoineDessauges/AWA1.git`.

Il vous suffit d’exécuter le fichier `index.hmtl` avec votre navigateur, aucun environnement particulier n'est nécessaire.

## Fonctionnement
Ce slider a été réaliser avec les outils et technologies suivantes :
 
 - Html / Css
 - [JavaScript](https://www.javascript.com/)
 - [Dynamics.js](http://dynamicsjs.com/)
 - [jQuery](https://jquery.com/)
 - [Font awesome](http://fontawesome.io/icons/)
 - [Google Fonts](https://fonts.google.com/)

Le code est séparé en trois fichiers :

 - index.html
 - main.js
 - main.css

### main.css
Contient le style du slider.

### main.js
Contient tout le code Javascript ainsi que les animations

### index.html
Contient le code html affichant la page.
C'est à cet endroit que l'on définit le contenu des slides et que l'on peut en rajouter ou en supprimer. Pour cela il faut respecter la structure définie pour le slider :

    <div class="container">
        <div class="slider">
            <div class="slider-nav">
                <i class="up fa fa-long-arrow-up" aria-hidden="true"></i>
                <i class="down fa fa-long-arrow-down" aria-hidden="true"></i>
            </div>
            <button class="buy">Acheter</button>
            <div class="slide">
                <img src="img/1.png" alt="Guitare">
                <span class="price">349$</span>
                <h2 class="name">Guitare 1</h2>
                <p class="desc">Description guitare 1</p>
            </div>
            <div class="slide">
                <img src="img/2.png" alt="Guitare">
                <span class="price">1099$</span>
                <h2 class="name">Guitare 2</h2>
                <p class="desc">Description guitare 2</p>
            </div>
            </div>
            // insérer une ou plusieurs slides ici si désirer 
    </div>