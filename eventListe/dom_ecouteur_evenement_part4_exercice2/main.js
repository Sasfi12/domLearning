//1
document.querySelector("h1").addEventListener("click", function() {
    document.querySelector('h1').style = "background-color: red ; color: white ; display: flex ; justify-content: center "
})
document.querySelector("h1").addEventListener("dblclick", function() {
    document.querySelector('h1').style = ""
})

//2
document.querySelector('h3').addEventListener('mouseover' , function() {
    let text  = document.querySelector('h3').textContent ; 
    text = text.split(''); 
    text.pop(); 
    text = text.join('');
    document.querySelector("h3").textContent = text ; 
    
    
})
document.querySelector('h3').addEventListener('mouseleave' , function() {
    document.querySelector('h3').textContent += "n"
})


let clickedP = false ;
document.querySelector("p").addEventListener("click", function() {
    // if statements ?  DID NOT WORK 
    // if(document.querySelector("p").hasAttribute("style")) { 
    //     document.querySelector("p").style = "background-color: blue ; color: gold;"
    // }
    // else if(document.querySelector("p").style == "background-color: blue ; color: gold;") {
    // }   document.querySelector("p").style = "background-color: white ; color: black;"
    // nested addEventListeners DID NOT WORK. 
    // document.querySelector("p").style = "background-color: blue ; color: gold;"
    // document.querySelector("p").addEventListener("click", function() {
    //     document.querySelector("p").style = ""
    // })
    // bool variable. 

    switch(clickedP) {
        case false : 
        document.querySelector("p").style = "background-color: blue ; color: gold ;"
        clickedP = true ;
        console.log('clicked !')
        break; 
        case true: 
        document.querySelector("p").style = ""
        clickedP = false
        console.log('clicked again !')
        break; 
    }
})
// CORRECTION 
/*
let titre = document.querySelector('h1')
let titre3 = document.querySelector('h3')
let para = document.querySelector('p')

titre.addEventListener('dblclick', function() {
    titre.style = "background-color: red; color: white;"
})

titre3.addEventListener('mouseover', function() {
    titre3.textContent = titre3.textContent.slice(0,-1)
})

para.addEventListener('click', function() {
    if (para.style.backgroundColor == "white" || para.style.color == "black") {
        para.style = "background-color: blue; color: gold;"
    } else {
        para.style = "background-color: white; color: black;"
    }
})

*/ 