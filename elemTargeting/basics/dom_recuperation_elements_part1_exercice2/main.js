//### 1. Stock la balise body dans une variable du nom de "myBody" 
let myBody = document.getElementsByTagName("body")[0]; 
//### 2. Trouve une méthode pour récuperer le premier élément de "myBody" et affiche le dans un console.log
let firstElem = myBody.firstElementChild;
console.log(firstElem)
//### 3. Trouve une méthode pour récuperer le dernièr élément de "myBody" et affiche le dans un console.log
let lastElem = myBody.lastElementChild
console.log(lastElem)
//### 4. Trouve une méthode pour récuperer tous les enfants de la premiere div puis stock dans une variable "exo4" et affiche la dans un console.log
let firstElemChilds = myBody.getElementsByTagName("div")[0].children
console.log(firstElemChilds)
//### 5. Récupère le premier li, puis trouve une méthode JS pour afficher l'élément suivant( c'est a dire le second li ) et affiche le résultat dans un CL 
let node = document.getElementsByTagName("li")[0].nextElementSibling.textContent ;
console.log(node)
//### 6. Récupère le second élément puis trouve une méthode JS pour afficher l'élément précédant( c'est a dire le premier li ) et affiche le résultat dans un CL
let second = document.getElementsByTagName("li")[1].previousElementSibling.textContent ; 
console.log(second)