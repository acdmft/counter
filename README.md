## 01 - Compteur

- Dans `App.js` , créez un `state` avec une clé `count` de valeur `0`
- Placez un titre h1 qui affichera "Counter"
- Placez un titre h2 contenant la valeur de `count`
- Placez 2 boutons `-` et `+` avec des backgrounds vert et rouge :
    - Quand on clique sur `-` , on décrémente le compteur, et la valeur se met à jour à l'écran
    - Quand on clique sur `+` , on incrémente le compteur, et la valeur se met à jour à l'écran

Pour cela, il vous faudra créer des callback functions dans les évènements `onClick` des boutons, et faire le nécessaire...

## 02 - Compteur V2

- Créer le composant `components/Counter.js`
- Le render doit contenir une `div` dans laquelle vous collerez :
    - la balise h2 et les deux boutons (enlevez-les de `App` et appelez le composant `Counter` à la place)
- Le h2 et les méthodes des boutons utilisent le state et les données du parent... Peut être faudrait-il que le parent les envoie en props et qu'on utilise les props à la place ? Les noms des props seront `count`, `increment` et `substract`