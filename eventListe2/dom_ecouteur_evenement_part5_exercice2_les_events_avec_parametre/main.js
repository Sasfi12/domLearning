// 1
let div = document.querySelector("#content"); 
for(let i = 0 ; i < div.childNodes.length  ; i++ ) {
    div.childNodes[i].addEventListener("click", function(e) {
        console.log(this)
    })
}

// 2 
for(let i = 0 ; i < div.childNodes.length ; i++) {
    div.childNodes[i].addEventListener("dblclick", function() { 
        let a = this.textContent.toUpperCase() ; 
        this.textContent = a 
    } )
}

// 3 
let styles = {
    borders : {
       first :"10px solid black", 
       second : "10px dotted green", 
       third : "10px solid red", 
       fourth : "10px solid gold", 
       sixth : "10px dotted gold"
    } ,
    backgroundColor : {
        first : "blue" , 
        second : "red" ,
        third : "green", 
        fourth : "gold" , 
        sixth : "brown"
    }
}
console.log(styles);
let divStyles = Object.values(styles) ; 
let keys = Object.keys(styles) ;
console.log(keys[1]) ;
console.log(divStyles) ;
let but = document.querySelector("input"); 
but.style = "width: 100% ; height: 100px"  
but.addEventListener("click", function(e) {
    for(let i = 0 ; i < divStyles.length ; i++ ) {
        let elem =  Object.values(divStyles[i]) ; 
        for(let j = 0 ; j < elem.length  ; j++) {
             if (keys[i] === "backgroundColor") {
                div.children[Math.floor(Math.random() * div.children.length ) ].style.backgroundColor = elem[j] ;
             }
             else if(keys[i] === "borders") {
                div.children[Math.floor(Math.random() * div.children.length ) ].style.border = elem[j] ;
             } 
        }
        // be mindfull of names when using 
        

    
    }
})

console.log('I have no secrets')