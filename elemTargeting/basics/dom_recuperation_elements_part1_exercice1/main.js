/*
# Instructions :
>*En utilisant la methode getElementsByTagName*



*/
// ### 1. Stock tous les titres h1 dans une variable et affiche le contenu de cette variable dans un console.log   V
let allH1 = document.getElementsByTagName("h1") ; // 1 
console.log(allH1) ; // 1
// ### 2 Stock chaque sous titre h3 dans des variables différentes et affiches leur contenu dans un console.log différent V 
let allH3 = document.getElementsByTagName("h3") ;// 2
let varH31 ; let varH32 ; let varH33 ; 
varH31 = allH3[0] ; varH32 = allH3[1] ; varH33 = allH3[2] ;
console.log(allH3) ; // 2
// ### 3. Après avoir récupéré tous les paragraphe, stock le second paragraphe et affiche dans un console.log V 
let allP = document.getElementsByTagName("p") ; // 3  
let secondP = allP[1] ; 
console.log(secondP.textContent) ; // 3 
//### 4. Après avoir récupéré tous les li, stock le 3eme li et affiche le dans un console.log V  V
let allLi = document.getElementsByTagName("li") ; // 4
let fourthLi = allLi[2].textContent ; 
console.log(fourthLi)

