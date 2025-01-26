// ### 1. Récupère et affiche le premier enfant de la dernière div
let dernierDiv = document.getElementsByTagName("div")[document.getElementsByTagName("div").length -1]; 
let dernierDivPremierEnfant = dernierDiv.firstElementChild  ;
console.log(dernierDivPremierEnfant) ;
// ### 2. Récupère et affiche le dernier enfant de la dernière div
let dernierDivDernierEnfant = dernierDiv.lastElementChild ; 
console.log(dernierDivDernierEnfant) ;
// ### 3. Récupère l'élément i contenu dans le premier p de la dernière div et affiche le
let thirPain = dernierDiv.getElementsByTagName("p")[0].querySelector("i"); 
console.log(thirPain)
// ### 4. Récupère l'élément b contenu dans le dernier p de la dernière div et affiche le 
let elemB = dernierDiv.getElementsByTagName("p")[dernierDiv.getElementsByTagName("p").length - 1].getElementsByTagName('b')[0]
console.log(elemB)
// ### 5. Affiche l'élément parent de l'élément i
console.log(thirPain.parentElement)
// ### 6. affiche l'élément parent de l'élément b
console.log(elemB.parentElement)
// ### 7. affiche l'élément suivant (le premier élément se trouvant dans la dernière div)
console.log(dernierDiv.textContent);
 