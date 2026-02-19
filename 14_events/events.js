// let mybtn=document.querySelectorAll("button")[0]
// let myinput=document.querySelector("input")
// let header=document.getElementsByTagName("h1")[0]

// mybtn.addEventListener("click",()=>{})//will accept 3 argument. 3rd argument not focusing now

// mybtn.addEventListener("click",()=>{//the above is syntax of addEventListner
//     // console.log("i am from click event");
//     if(header.textContent=="Virat"){
//         header.textContent="Dhoni"
//     }
//     else
//         header.textContent="Virat"
// }) 

// mybtn.addEventListener("click",()=>{
//     if(myinput.type=="password"){
//         myinput.type="text"
//         mybtn.innerHTML="Hide"
//     }
//     else {
//         myinput.type="password"
//         mybtn.innerHTML="Show"
//     }
// })

let displayBtn=document.querySelectorAll("button")[1]
let img=document.getElementsByTagName("img")[0]

displayBtn.addEventListener("click",()=>{
    if(img.style.display=="none"){
        img.style.display="inline-block"
    }
    else{
        img.style.display="none"
    }
})
