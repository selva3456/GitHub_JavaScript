let myInput=document.querySelector("input")
let myBtn=document.querySelector("button")
let myPara=document.querySelector("p")

// myBtn.innerHTML="i'm from inner html"
//add event listner
// myBtn.addEventListener("click",()=>{
//     if(myBtn.innerHTML=="Click Me"){
//          myBtn.innerHTML="Click Here"
//        myPara.innerHTML="i am from event listner"
//     }
//     else{
//         myBtn.innerHTML="Click Me"
//         myPara.innerHTML="Thala Dhoni"
//     }
// })
// console.log(myBtn);

//element property //in react is is too important
// myBtn.onclick=()=>{
//     console.log("i am from element property");
// }

//html attribute
// function abc(){
//     console.log('im am from js ');
// }

// myInput.addEventListener("keydown",()=>{
//     console.log("hello");
// })

// myInput.addEventListener("keyup",()=>{
//     console.log("hii");
// })

// myInput.addEventListener("keypress",()=>{
//     console.log("HiiHello");
// })

//mouse Events
myBtn.addEventListener("click",()=>{
    console.log('i am from mouse click');
})

myBtn.addEventListener("dblclick",()=>{
    console.log('i am from double click');
    
})

myBtn.addEventListener("mouseover",()=>{
    console.log(' i am from mouse over');
})

myBtn.addEventListener("mouseout",()=>{
    console.log("i am from mouse out");
    
})

myBtn.addEventListener("mouseup",()=>{
    console.log("i am from mouseup");
    
})
myBtn.addEventListener("mouseover",()=>{
    if(myBtn.addEventListener("mouseover",()=>{})){
        myPara.innerHTML="i am from"
        myPara.style.fontSize='30px'
    }
})
