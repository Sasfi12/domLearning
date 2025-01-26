let myObject = {
    nom: 'nicolas',
    age: 18,
}
let a = myObject
let count = 0 ; 
//### 1. En passant par la div dont l'id est object, récupère le h1 et le h2 dans un tableau du nom de myElements. 
let myElements = [document.querySelector('#object').querySelector('h1'), document.querySelector('#object').querySelector('h2')] ; console.log(myElements);  
//### 2. Trouve une méthode pour créer un tableau des propriétés de ton objet 
let myObjectProperties = console.log(Object.keys(a) , Object.values(a) , Object.entries(a));  
//### 3. Créer une boucle qui va parcourir toutes les propriétés contenu dans ton object et qui pour chacune d'elle fait un console.log de la propriété
for(let i = 0 ; i < Object.keys(a).length ; i++) {console.log(Object.keys(a)[i]);}  
//### 4. Efface ton console.log, trouve un moyen d'aller dans ton objet récupéré la valeur de chaque propriétés et fait un console log de ce que cela retourne
for(let i = 0 ; i < Object.values(a).length ; i++) {console.log(Object.values(a)[i]);}  
//### 5. Rajoute un count(compteur ou index comme tu l'entends) dans ta boucle
for(let i = 0 ; i < Object.values(a).length ; i++) {console.log(Object.values(a)[i]); count += 1 ;  } 
//### 6. Sert toi de ce count/index pour parcourir ton tableau myElement dans ta boucle et d'y insirer ce qu'on te retourne a l'énoncé 4
for(let i = 0 ; i < count ; i++ ) {
    myElements[i].textContent += Object.values(a)[i]  
}

