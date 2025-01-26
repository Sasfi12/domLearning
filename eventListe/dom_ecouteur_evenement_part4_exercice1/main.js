// 1 
let h1 = document.querySelector("h1") ; 
// 2 
// h1.style = "color: blue ;"
// 3 
function program (elem) { 
    elem.style = 'color: blue ;' 
}
// 4 
// program(h1)

// 5 

h1.addEventListener("click", function(target) {
    program(h1)
})