// 1
let firstInput = document.getElementsByTagName("input")[0];

firstInput.addEventListener("focus", function () {
    firstInput.style.backgroundColor = "blue"
})

// 2 
let secondInput = document.getElementsByTagName("input")[1];

secondInput.addEventListener("focus", function () {
    secondInput.style = "background-color: blue"
})
secondInput.addEventListener("focusout", function () {
    secondInput.style = ""
})
// 3 
let variable2 = document.getElementsByClassName("secondParagraphe")[0];
let variable1 = document.getElementsByClassName("premierParagraphe")[0];
let variable3 = document.getElementsByClassName("dernierParagraphe")[0];
let butt = document.getElementsByClassName("buttonExo")[0];
butt.addEventListener("click", function () {
    variable1.textContent = variable2.textContent
    variable3.textContent = variable2.textContent
})

// 4 
let takenName = document.querySelector("#exo4")
let butt2 = document.getElementsByClassName("buttonExo")[1];
butt2.addEventListener("click", function () {
    if (document.querySelectorAll("input")[2].value !== "") {
        takenName.textContent = document.querySelectorAll("input")[2].value
    }
})
// 5 
let butt3 = document.querySelectorAll("button")[2];
let src = document.querySelectorAll("p")[4];
let img = document.querySelector("img");
console.log(src.textContent);
butt3.addEventListener("click", function () {
    let maniPulate = src.textContent.split('./')[1]
    img.setAttribute("src", maniPulate)
})

// 6 
let img2 = document.querySelectorAll("img")[1];
let textNextToIt = document.querySelectorAll("img")[2];
let getURL ;
img2.addEventListener("click", function () {
    getURL = img2.getAttribute("src");

})
textNextToIt.addEventListener("click", function () {
    if(getURL != undefined) {
    textNextToIt.setAttribute("alt", getURL)
    }
})
// 7
let text1 = document.querySelectorAll("p")[5];
let text2 = document.querySelectorAll("p")[6];
let butt4 = document.querySelectorAll("button")[3];
butt4.addEventListener("click", function() {
    let store = text2.textContent  
    text2.textContent = text1.textContent ; 
    text1.textContent = store ; 
})

