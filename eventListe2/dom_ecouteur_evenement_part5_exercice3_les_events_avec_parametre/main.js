// 1 
function sayMyName(guy) {
    
}
for(let i = 0 ; i < document.querySelectorAll("li").length ; i++)
document.querySelectorAll("li")[i].addEventListener('focus' , function() {
    alert(this.textContent)
})
// 2 
for(let i = 0 ; i < document.querySelectorAll("li").length ; i++)
    document.querySelectorAll("li")[i].addEventListener('dblclick' , function() {
        let e = prompt('Enter your new option... ') ;
        this.textContent = e ; 

    })

// 3
let input1 = document.querySelectorAll("input")[0] ;  
let input2 = document.querySelectorAll("input")[1] ;  
let input3 = document.querySelectorAll("input")[2] ;  
input3.addEventListener("click", function() {
        let firstValue ; 
        let secondValue ; 
        for(let i = 0 ; i < document.querySelectorAll("li").length ; i++) {
            if(document.querySelectorAll("li")[i].textContent == input1.value ) {
                firstValue = document.querySelectorAll("li")[i]
            }
            else if(document.querySelectorAll("li")[i].textContent == input2.value) {
                secondValue = document.querySelectorAll("li")[i]
            }
        }        
        let storage = firstValue.textContent;
        firstValue.textContent = secondValue.textContent;
        secondValue.textContent = storage ;  
    
})