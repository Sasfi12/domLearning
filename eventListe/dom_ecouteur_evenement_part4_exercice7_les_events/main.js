// 1 
var div = document.querySelector("#content") 
let count = document.querySelector("h2").textContent.length
div.addEventListener("click", function(event){
    if(event.target.tagName == "DIV") {
        event.target.style.border = "solid red 10px" ;
    }
   else if(event.target.tagName == "P") {
        event.target.style.color = "red" ;
        event.target.style.fontWeight = "bolder" ; 
    }
   else if(event.target.tagName == "H1") {
        event.target.style.textDecoration ="underline"; ;
    }
   else if(event.target.tagName == "H2") {
       let a = event.target.textContent.split('') ;
       a.pop();
       a = a.join('');
       event.target.textContent = a 
    }
})
// 2 
let done = false  ; 
let text = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !"
document.querySelector("section").addEventListener("click", function(event) {
    if(!done) {
    event.target.querySelector("p").textContent = text  
    done = true
    }
    else {
        event.target.querySelector("p").textContent = ""
        done = false 
    } 
})