//### 1. Affiche le contenu textuel du second h1
console.log(document.querySelectorAll('h1')[1].textContent)
//### 2. Affiche le contenu textuel du dernier li
console.log(document.getElementsByTagName('li')[document.getElementsByTagName('li').length - 1].textContent)
//### 3. Affiche le contenu textuel du premier p en majuscule
console.log(document.getElementsByTagName("p")[1].textContent.toUpperCase())
//### 4. Avec l'aide d'un forEach affiche le contenu de chaque li
let a = document.querySelectorAll('li');
a.forEach(function(li) {
    console.log(li.textContent)
});
console.log(a)
//### bonus : affiche chaque li en majuscule
let b = document.querySelectorAll('li');
b.forEach(function(li) {
    console.log(li.textContent.toUpperCase())
});