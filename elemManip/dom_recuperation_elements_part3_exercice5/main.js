let softSkills = {
    Trello: '49%',
    Git: '87%',
    GitHub : '50%',
    Discord: '15%',
}



//### 1. Stock tous les h2 dans une variable du nom de 'elements', attention voici les contraintes :
//- Tu dois utiliser un querySelectorAll
//- Tu dois ciblé la div et plus précicément son id "liste-soft-skills"
let elements = document.getElementById('liste-soft-skills').querySelectorAll("h2")
console.log(elements)
//### 2. Insert dans les bons H2 les pourcentages de ton objet, voici les contraintes :
//- Utilise une boucle "for in" pour parcourir ton objet 
let iterOver = Object.entries(softSkills).join("").split('%').pop()

for(value in Object.keys(softSkills))  {
	elements[value].textContent += ` ${list[value]}`   
   	 
	}	 
//### 3. Change le style des h2 selons certaines conditions :
//- Si le pourcentage est inférieur à 50 alors le h2 a un background rouge
//- Si le pourcentage est supérieur à 50 alors le background est vert et l'écriture blanche
//- Si //     //  égale à 50 alors il n'y a pas de background
//- Si //     // est égale à 100 alors le bakcground est gold et l'écriture est noir
//
 
for(i in elements) { 
    if(parseInt(list[i]) === 100) {elements[i].style = "background-color : yellow ; color: black;" ;}
    else if(parseInt(list[i]) < 50)  {elements[i].style = "background-color : red ;"} 
	else if(parseInt(list[i]) > 50) {elements[i].style = "background-color : green; color : white;" }
	else if(parseInt(list[i]) === 50) {elements[i].style = "background : none ;" }
	 

	}