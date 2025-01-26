//# Exercice d'observation :
//>*En utilisant querySelector et querySelectorAll, sert toi des class du fichier style.css et rien d'autre !
//>*Cherche des methodes pour résoudre les énoncés suivants :*
// 
//## Partie 1 Ajout de contenu
//### 1. Dans le h1 ajoute le texet suivant : Les attributs class et id
let h1 = `${document.querySelector('h1')} à pour classe ${document.querySelector("h1").classList} et pour ID ${document.querySelector('h1').id} `  
console.log(h1)
let h1vré = document.querySelector('h1') ;
//### 2. Dans le premier h2 ajoute le texte suivant : Exercice 2 partie A
let premH2 = document.querySelector('h2') ; 
premH2.textContent = "Exercice 2 Partie A";   
//### 3. Dans le second h2 ajoute le texte suivant : Exercice 2 partie B
let demsH2 = document.querySelectorAll('h2')[1] ; demsH2.textContent += "Exercice 2 partie B"; 
//### 4. Dans le premier p ajoute le texte suivant(attention a conserver les balises) :  L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b>ù
let premP = document.querySelector('p') ; premP.innerHTML += `<b>par coeur</b>`  
//### 5. Dans le second p ajoute le texte suivant(attention a conserver les balises) :   La manipulation de l'attribut Style peut-être une <i>solution</i> rapide
let demsP = document.querySelectorAll('p')[1] ; demsP.innerHTML += `<i>solution</i>`
//
//
//
//## Partie 2.1 Ajout d'attribut et de leurs valeurs
//### 6. Rajoute l'attribut id dans le h1 et donne lui la valeur "bigTitle"
h1vré.setAttribute('id' , 'bigTitle') ; console.log(h1vré) 
//### 7. Rajoute l'attribut class a la div avec comme valeur "container"
let laDiv = document.querySelector('div') ; laDiv.setAttribute("class" , "container"); console.log(laDiv)  
//### 8. Aux h2 ajoute avec l'aide d'un foreach l'attribut class avec comme valeur "title" 
let lesH2 = document.querySelectorAll('h2'); for(let i = 0 ; i < lesH2.length ; i++) { lesH2[i].setAttribute("class" , "title") ; console.log(lesH2[i]) }  
//### 9. Aux p ajoute avec l'aide d'un foreach l'attribut class avec comme valeur "text"
let lesP = document.querySelectorAll("p") ; for(let i = 0 ; i < lesP.length ; i++) { lesP[i].setAttribute("class" , "text") ;  console.log(lesP[i]) }
//
//
//## Partie 2.2 Ajout d'attribut et de leurs valeurs
//### 10. Dans la première section ajoute l'attribut class et les class suivantes : margin-bottom border-black padding
let firstSection = document.querySelectorAll('section')[0] ;  firstSection.setAttribute('class', 'padding margin-bottom border-black') ; console.log(firstSection) ;  
//### 11. Dans la seconde section ajoute l'attribut class et les class suivantes : margin-top border-black padding 
let secondSection = document.querySelectorAll('section')[1] ; secondSection.setAttribute('class' ,'padding margin-top border-black'); console.log(secondSection); 
//### 12. Dans la div ayant comme parent une section, ajoute l'attribut style et fait en sorte qu'il ait un fond bleu, une bordure de ton choix, une hauteur de 20px et une largueur de 20px
let div12 = secondSection.lastElementChild ; div12.style = "background-color: blue ; border: 2px red solid ; height: 20px ; width: 20px ; " 
 
