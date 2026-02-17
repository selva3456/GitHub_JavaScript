let myForm=document.querySelector("form")
let myUser=document.querySelectorAll("input")[0]
let myPass=document.querySelectorAll("input")[1]

myForm.addEventListener("submit",()=>{
    console.log("i am from click");
    console.log(myUser.value);
    console.log(myPass.value);
})
myForm.addEventListener("reset",()=>{
    console.log("i am from reset");
})
// myUser.addEventListener("keydown",()=>{//keypress,input*,keyup
//     console.log(myUser.value);
// })
// myUser.addEventListener("input",()=>{//***input***
//     console.log(myUser.value);
// })
myUser.addEventListener("change",()=>{//***input***
    console.log(myUser.value);
    console.log(myPass.value);
})

//WINDOW EVENTS

window.addEventListener("load",()=>{
    console.log("i am from load event");
})
// window.addEventListener("unload",()=>{
//     console.log(" iam from unload event");
// })
window.addEventListener("resize",()=>{
    console.log('iam from resize event');
    console.log(window.innerHeight);
    console.log(window.innerWidth);  
})
window.addEventListener("beforeunload",()=>{
    console.log("while unloading this page it will be executed ");
})
window.addEventListener("scroll",()=>{
    console.log('while scrolling it will be executed');
})