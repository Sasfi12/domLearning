let competences = {
    HTML: '71%',
    CSS: '95%',
    JS : '50%',
    React: '18%',
    Laravel: '100%'
}

//# Exercice d'observation :
//>*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*
//
//>*Cherche des methodes pour résoudre les énoncés suivants :*
//
//
//### 1. Stock tous les h2 dans une variable du nom de 'elements', attention voici les contraintes :
//- Tu dois utiliser un querySelectorAll
//- Tu dois ciblé la div et plus précicément son id "liste-competences"
let elements = document.querySelectorAll("#liste-competences>h2") ;
//### 2. Insert dans les bons H2 les pourcentages de ton objet, voici les contraintes :
//- Utilise une boucle "for in" pour parcourir ton objet 
let list = Object.values(competences).join('').split('%')
for(value in Object.keys(competences))  {
	elements[value].textContent += ` ${list[value]}`   
   	 
	}	 
//### 3. Change le style des h2 selons certaines conditions :
//- Si le pourcentage est inférieur à 50 alors le h2 a un background rouge
//- Si le pourcentage est supérieur à 50 alors le background est vert et l'écriture blanche
//- Si //     //  égale à 50 alors il n'y a pas de background
//- Si //     // est égale à 100 alors le bakcground est gold et l'écriture est noir
//
 
for(i in elements) { 
    if(parseInt(list[i]) === 100) {elements[i].style = "background-color : gold ; color: black;" ;}
    else if(parseInt(list[i]) < 50)  {elements[i].style = "background-color : red ;"} 
	else if(parseInt(list[i]) > 50) {elements[i].style = "background-color : green; color : white;" }
	else if(parseInt(list[i]) === 50) {elements[i].style = "background : none ;" }
	 

	}
    // Find a more optimal way later on. 
console.log(list , elements)