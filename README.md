# 8 mètres sous la mousse

Un petit parcours web « dont vous êtes le héros » pour descendre, couche par couche, dans la tourbière des Ponts-de-Martel : des sphaignes vivantes à la base de la tourbe, environ 8500 ans plus bas.

Prototype de support de médiation (type station QR code d'un sentier ou d'une exposition).

## Ce que fait le site

- 8 étapes, de la surface (0 cm) au fond (−8,5 m), avec une jauge profondeur / âge.
- Des choix à chaque étape, dont un détour « je saute sur la mousse » qui explique pourquoi on reste sur les passerelles.
- Des encarts « j'observe » qui s'ouvrent sur place.
- Une carotte récapitulative à la fin, et une page de sources.
- Chaque étape a sa propre adresse (`#surface`, `#acrotelme`, `#catotelme`, `#archives`, `#carbone`, `#fond`) : on peut imprimer un QR code par étape.

Site 100 % statique : trois fichiers, aucune dépendance, aucun traceur, aucune police externe. Fonctionne hors ligne.

## Mettre en ligne avec GitHub Pages

1. Créer un dépôt public, par exemple `tourbe`.
2. Y déposer `index.html`, `style.css`, `script.js` et ce `README.md`.
3. Dans le dépôt : **Settings → Pages → Build and deployment**, source **Deploy from a branch**, branche `main`, dossier `/ (root)`, puis **Save**.
4. Après une minute, le site est en ligne à l'adresse `https://<utilisateur>.github.io/tourbe/`.

## Modifier les textes

Tout le contenu est dans l'objet `SCENES` en haut de `script.js` : titre, textes, âge, profondeur et choix de chaque étape. Les sources sont dans `SOURCES`, juste en dessous.

## À faire valider avant usage public

Les ordres de grandeur viennent des sources listées sur la page « Sources ». Points à faire relire par un·e spécialiste :

- le rythme d'environ 1 mm par an et les âges arrondis associés à chaque profondeur ;
- l'épaisseur de 8,5 m au sommet du dôme ;
- la succession des « âges » forestiers (bouleau, pin, noisetier, sapin blanc, hêtre) tirée de la thèse d'A. Ischer (1935) ;
- la phrase sur l'agriculture au moment de la formation de la première couche.

## CV, lettre et QR codes

- `cv.html` et `lettre.html` : versions web, imprimables en A4 (bouton « Imprimer / PDF » en haut, ou Ctrl/Cmd + P, format A4, marges « aucune », graphiques d'arrière-plan activés). Styles communs dans `doc.css`.
- Bouton « Modifier le texte » : corrige le CV ou la lettre directement dans la page, puis « Imprimer / PDF ». Les modifications restent enregistrées dans ton navigateur seulement (`edit.js`) ; « Revenir à la version en ligne » les efface.
- Papier blanc pour économiser l'encre.
- Les deux pages ont `noindex` : les moteurs de recherche ne les référencent pas, mais elles restent publiques pour qui a le lien.
- `qr/qr-site.svg`, `qr/qr-cv.svg`, `qr/qr-lettre.svg` : QR codes en millimètres (1 module = 1 mm), un seul chemin noir, prêts pour la gravure laser.
- `qr/planche-herbier-qr.svg` : plaquette de 149 × 73 mm avec les trois QR codes (35 mm) et leurs légendes. Calques : `gravure-qr`, `gravure-texte` (convertir le texte en chemins dans Inkscape : Chemin → Objet en chemin) et `decoupe` (contour rouge fin).

## Sources

- Maison de la Tourbière — https://www.mdt-ne.ch/
- Canton de Neuchâtel, SFFN — dépliant « Marais »
- OFEV — fiche IFP 1003, Tourbière des Ponts-de-Martel
- Le Temps — « Dans la tourbière du Marais-Rouge »
- A. Ischer (1935), *Les tourbières de la vallée des Ponts-de-Martel*, Université de Neuchâtel

Conception, textes et développement : Mélanie Thomas, 2026.
