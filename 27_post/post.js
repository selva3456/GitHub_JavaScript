let myGet=document.querySelectorAll("button")[0]
let myPost=document.querySelectorAll("button")[1]

let mySection=document.querySelector("section")

myGet.addEventListener("click",async ()=>{
    mySection.innerHTML=""
    let myRes=await fetch("https://api.escuelajs.co/api/v1/users")
    let data=await myRes.json()
    console.log(data);

    data.forEach((e)=>{
        let myImg=document.createElement("img")
        myImg.src=e.avatar
        let myh2=document.createElement("h2")
        myh2.innerHTML=e.name

        mySection.append(myImg,myh2)
  
    })
})

let obj={
    name:"selva",
    email:'sel@gmail.com',
    password:123,
    avatar:'https//i.imgur.com/'

}

myPost.addEventListener("click",async ()=>{

    let res=await fetch("https://api.escuelajs.co/api/v1/users",{method:'post',headers:{'content-type':"application|json"},body:JSON.stringify(obj)})
    console.log(res);
    
})