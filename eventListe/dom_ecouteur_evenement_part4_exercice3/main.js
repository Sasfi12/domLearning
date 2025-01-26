// 1 
document.querySelector("h1").addEventListener("mouseover", function() {
    document.querySelector("h1").classList += "text-blue" ;
})
document.querySelector("h1").addEventListener("mouseleave", function() {
    document.querySelector("h1").classList = "" ; 
        // use this to point directly to the selected eventListener.
    this.classList = "" ;  
})
//2 
document.querySelector("h3").addEventListener("dblclick", function() {
    document.querySelector("h3").classList = "text-error" ; 
})
//3 
let already = false ; 
document.querySelector("p").addEventListener("mouseover", function() {
    if(!already) {
        document.querySelector("p").classList = "text-style"; 
        already = true
    }
    else {
        document.querySelector("p").classList = "" ; 
        already = false
    }
})
//4 

for(let i = 0 ; i < document.querySelectorAll('p').length ; i ++ ){ 
    let already4 = false    
    document.querySelectorAll("p")[1].querySelectorAll("span")[i].addEventListener("click" , function() {
        if(!already4) {
        document.querySelectorAll("span")[i].classList = 'bolder';
        already4 = true
        }
        else  {
        document.querySelectorAll("span")[i].classList.remove("bolder") 
        already4 = false
        }
    })
}

//5
let dernierP = document.querySelectorAll("p")[2].querySelectorAll("span")

for(let i = 0 ; i < dernierP.length ; i++ ) {
    dernierP[i].addEventListener("click", function() {   
        dernierP[i].classList = "bolrder-red"
        for(let j = 0 ; j < dernierP.length ; j++) {
            if(i != j) {
                dernierP[j].classList.remove("bolrder-red")
            }
        }
    })
}


/* CORRECTION 
// 1
let titre = document.querySelector('h1')

titre.addEventListener('click', function() {
    titre.classList.add('text-blue')
})

// 2
let titre3 = document.querySelector('h3')

titre3.addEventListener('dblclick', function() {
    titre3.classList.add('text-error')
})

// 3
let para = document.querySelector('p')
para.addEventListener('click', function() {
    // para.classList.toggle('text-style')
    if (para.className == "text-style") {
        para.removeAttribute('class')
    } else {
        para.setAttribute('class', 'text-style')
    }
})

// 4
let paras = document.querySelectorAll('p')
let spans = paras[1].querySelectorAll('span')

spans.forEach(element => {
    element.addEventListener('click', function(){
        element.classList.add('bolder')
    })
});

// paras.addEventListener('click', function(e) {
//     if (e.target == 'span') {
//         e.target.classList.toggle('bolder')
//     }
// })


// 5

let spans2 = paras[2].querySelectorAll('span')
console.log(spans2);

spans2.forEach(element => {
    element.addEventListener('click', function(){
        spans2.forEach(e => {
            e.removeAttribute('class')
            element.classList.add('bolder-red')
        });
    })
});
*/