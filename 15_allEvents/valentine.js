let noBtn=document.querySelector(".no")

console.log(noBtn);

let left=60
noBtn.addEventListener("mouseover",()=>{
    left=left+5
    noBtn.style.left='$(left)%'
})