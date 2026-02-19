let section=document.querySelector("section")
let div=document.querySelector("div")
let btn=document.querySelector("button")

section.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log('i am from section');
})

div.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("i am from div");
})

btn.addEventListener("click",(event)=>{
    event.stopPropagation()
    console.log('i am from button');
})

//bubbling stage ->button ->div ->section (by default)