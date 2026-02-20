let mySelect=document.querySelector("select")

let state=['tamilnadu','andrapradesh','kerala','karnataka','delhi','jammu','pondichery','uttarpradesh','mumbai','punjab','assam']

state.sort()

state.forEach((e,i,arr)=>{

    let myoption=document.createElement("option")
    myoption.innerHTML=e
    myoption.value=e
    mySelect.append(myoption)

})
mySelect.addEventListener("input",()=>{
    console.log(mySelect.value);
    
})