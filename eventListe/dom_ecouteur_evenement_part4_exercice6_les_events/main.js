// 1
let div = document.querySelector("#content"); 
function message (e) {
    console.log(e)
    e.style.border = "3px dashed red"
}
div.addEventListener("click", function(event) {
    message(event.target)
})
// le log s'affiche car tout l'intérieur 
// provoque l'event listener.