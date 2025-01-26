//### 1. Affiche le contenu textuel du premier paragraphe contenant la class "tartine", utilise une méthode pour récupérer un élémént via sa class
let premP = document.querySelector('.tartine').textContent;
console.log(premP);
//### 2. Pareil que le précédent mais cette fois si c'est via l'id "toast"
let secondP = document.querySelector('#toast')
console.log(secondP.textContent)
//### 3. Affiche le dernier élément ayant la class tartine ( pas son contenu ou le text, l'élément en entier) 
let lastP = document.querySelectorAll('.tartine')[document.querySelectorAll('.tartine').length - 1] 
console.log(lastP.textContent)

let a = document.querySelectorAll('p')[document.querySelectorAll('p').length - 1] 

a.innerHTML += " C'est maintenant."
