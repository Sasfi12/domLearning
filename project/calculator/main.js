"use strict" ; 
let result = 0 ;
let storedValue = [] ; // maybe not needed
let displayText = document.querySelector(".display") ;
let arrayStoreNumber = document.querySelectorAll(".num") ; 
let resetButton = document.querySelector('#Reset') ; 
let arrayStoreOperations = document.querySelectorAll(".operation")
//resetButton

resetButton.addEventListener("click", function() {
    function reset()  {
        displayText.textContent = "" ; result = 0 ;
    } 
    reset()
})
//Push button numbers to Display. 
for(let i = 0 ; i< arrayStoreNumber.length ; i++) { 
    arrayStoreNumber[i].addEventListener("click", function(event){
        displayText.textContent += arrayStoreNumber[i].textContent

    })
}

// + button event 
    // add Button
var addButton = document.querySelector("#Add") 
var subButton = document.querySelector("#Sub")
var mulButton = document.querySelector("#Mul")
var divideButton = document.querySelector("#Divide")
var equalButton = document.querySelector("#Equal")

// eventListeners. 