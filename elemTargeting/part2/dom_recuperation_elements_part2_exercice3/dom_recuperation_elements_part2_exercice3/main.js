//### 1. Récupère la div dont l'id est content avec un querySelector et affiche le résultat dans la console
console.log(document.querySelector('#content'))
//### 2. Récupère la div dont l'id est content avec un querySelectorAll et affiche le résultat dans la console
console.log(document.querySelectorAll("#content"))
//### 3. Récupère les li dont la class est important avec querySelector et affiche le résultat dans la console
console.log(document.querySelector(".important"));
//### 4. Récupère les li dont la class est important avec querySelectorAll et affiche le résultat dans la console
console.log(document.querySelectorAll(".important"));
//### 5. Affiche avec l'aide d'un foreach le contenu de chaque li avec la dernière lettre en majuscule 
//### 6. Récupère le p dont la class est "grandParagraphe" se trouvant dans la div avec l'id "content", tu dois ici utiliser un getElementById et un getElementsByClassName