// 1 

let pContent = document.querySelector("#content").textContent 
console.log(pContent)
function addText (text) {
    text.textContent = pContent
}
let pSection = document.querySelector("section").querySelector("p") ; 
let butt1 = document.querySelector("input")

butt1.addEventListener("click", function() {
    addText(pSection)
})

// 2 
let gold = "gold";
let red = "red"; 
function goldRed(background , textColor , elem) {
    elem.style.backgroundColor = background ; 
    elem.style.color = textColor ; 
}
document.querySelector("h1").addEventListener("click", function() {
    goldRed(gold, red, this)     
})
