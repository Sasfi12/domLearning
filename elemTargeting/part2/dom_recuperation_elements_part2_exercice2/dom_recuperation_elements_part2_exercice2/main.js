d = document ;
//### 1. Affiche le h3 qui est le premier enfant de la div content
let h3Content = d.getElementById('content');
console.log(h3Content);
//### 2. Affiche le titreNiv3
let titreNiv3 = d.getElementById('titreNiv3');
console.log(titreNiv3); 
//### 3. Affiche l'élément qui précède le titreNiv3
console.log(titreNiv3.previousElementSibling);
//### 4. Affiche l'élément qui succède a petitParagraphe en utilisant la méthode nextElementSibling
console.log(document.querySelector('.petitParagraphe').nextElementSibling);
//### 5. Affiche le parent des éléments ayant comme class "important"
console.log(document.querySelectorAll(".important"));
//### 6. Affiche le premier enfant, du parent de "listElements"
console.log(document.querySelector('#listElements').parentElement.firstElementChild);
//### 7. Affiche l'avant dernier élément ayant la class "important"
console.log(document.querySelectorAll('.important')[document.querySelectorAll('.important').length - 2]);
//### 8. Affiche le deuxieme élément avant celui ayant comme id "textGeneral" (montes de deux balise en gros)
console.log(document.querySelector('#textGeneral').previousElementSibling.previousElementSibling);
//### 9. En partant du span Nom affiche l'élément "p" (ayant un span Prénom)
let spanPrenom = document.querySelector('#nom').parentElement.nextElementSibling;
console.log(spanPrenom.textContent);
//### 10. En partant de Quentin, affiche Meilleur Coach
let spanMeilleurCoach = document.querySelector('#prenom').parentElement.previousElementSibling.firstElementChild.firstElementChild.textContent;
console.log(spanMeilleurCoach);
//### 11. Trouve une methode qui permet de récupérer "un" élément via sa class ou son id sans utiliser getElementById ou getElementsByClassName et récupère "grandParagraphe"
console.log(document.querySelector(".grandParagraphe").textContent);
//### 12. Trouve une methode qui permet de récupérer plusieurs éléments, qu'ils aient des class ou non et affiche tous les li dans une boucle forEach()
document.querySelectorAll('li').forEach(function(t){
    console.log(t.textContent);
})