"use strict";
//### 1. Récupère le h2 dont la valeur est "Exercice" et affiche uniquement le text
let h2Ex = document.querySelector("h2") ;
let h2Extext = h2Ex.textContent ; console.log(h2Extext) ;  
//### 2. Trouve le moyen de modifier sa valeur par "Exercice 1"
h2Ex.innerHTML += " 1" ;
//### 3. Récupère l'élément p juste en dessous ce h2 et rajoute y la ligne js utilisé pour résoudre l'exercice 2.
let exo3 = h2Ex.nextElementSibling ;
exo3.innerHTML += "Exercice 1" ;
//### 4. Récupère la première section et trouve le moyen d'affiche juste le nom de l'id dans la console 
let premSection = document.getElementsByTagName("section")[0].getAttribute('id') ;
console.log(premSection) ;
//### 5. Récupère le premier h1 et trouve le moyen d'afficher juste le nom de la class dans la console 
//( attention il existe deux propriétés pour afficher les class, fait l'exercice avec l'une et puis avec l'autre !)
let h11 = document.getElementsByTagName('h1')[0].getAttribute('class');
console.log(h11);
// trouve la deuxiéeme methode toit meme , flemmard. 
//### 6. Avec l'aide d'un forEach affiche le nom de class de chaque h1
let allH1 = document.getElementsByTagName("h1") 
for(let i = 0 ; i < allH1.length ; i++) {
    console.log(allH1[i].textContent); 
}
//### 7. Trouve une propriété pour afficher tous les attributs du premier input 
console.log('exo 7')
let firstInput = document.querySelector("input")
console.log(firstInput.getAttributeNames())
for(let i = 0 ; i < firstInput.getAttributeNames().length  ; i++) {
    console.log("this input's "+ firstInput.getAttributeNames()[i] + " is " + firstInput.getAttribute(firstInput.getAttributeNames()[i]))
}
//### 8. Trouve le moyen de récupérer la valeur dans l'attribut type du premier input
console.log(firstInput.getAttribute('type'));
//### 9. Récupère l'input dont l'id est "inputPassword3" et ajoute lui un attribut "type" dont la valeur est "password"
let inputPassword3 =  document.getElementById('inputPassword3')
console.log(inputPassword3)
inputPassword3.setAttribute('type', 'password') ;
console.log(inputPassword3) ;
console.log(inputPassword3.getAttributeNames()) ;
for(let i = 0 ; i < inputPassword3.getAttributeNames().length  ; i++) {
    console.log( "this input's "+ inputPassword3.getAttributeNames()[i] + " is " + inputPassword3.getAttribute(inputPassword3.getAttributeNames()[i])) ;
}
//### 10. Modifie la valeur de l'attribut "type" du premier input avec la valeur "color"
firstInput.setAttribute('type', 'color') ;