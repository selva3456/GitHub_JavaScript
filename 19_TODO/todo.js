let myInput=document.querySelector("input")
let myBtn=document.querySelector("button")
let myList=document.querySelector("ol")


    myInput.placeholder="Enter the Word"

myBtn.addEventListener("click",()=>{
    console.log(myInput.value);

    // myList.innerHTML+=`<li>${myInput.value}</li>`
    let myLi=document.createElement("li")
    myLi.textContent=myInput.value
    myList.append(myLi)
     
    let mydelbtn=document.createElement("button")
    mydelbtn.innerHTML="deleted"

    myLi.append(mydelbtn)

    mydelbtn.addEventListener("click",()=>{
        // myLi.remove()
        // myLi.style.textDecoration="underline"
        myLi.style.textDecoration="line-through"

    })

    myInput.value=""
})