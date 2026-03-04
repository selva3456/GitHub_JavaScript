let get=document.querySelectorAll("button")[0]
let post=document.querySelectorAll("button")[1]
let mysection=document.querySelector("section")

get.addEventListener("click",async ()=>{
    let myRes=await fetch('https://69a689a7feb94223b31d5279.mockapi.io/UserData')
    let userData=await myRes.json()
    console.log(userData);

    userData.forEach((e)=>{
    let myh3=document.createElement("h3")
    myh3.innerHTML=e.name

    let myh2=document.createElement("h2")
    myh2.innerHTML=e.avatar

    mysection.append(myh3,myh2)

    })
    
})
let obj={
    name:"selva",
    age:22
}

post.addEventListener("click",async ()=>{
    let myRes1=await fetch("https://69a689a7feb94223b31d5279.mockapi.io/UserData",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(obj)
    })

    let data=await myRes1.json()
    console.log(data);
    
})


let oneData=document.querySelectorAll("button")[2]
let put=document.querySelectorAll("button")[3]
let myDelete=document.querySelectorAll("button")[4]

oneData.addEventListener("click",async ()=>{

    let r=Math.ceil(Math.random()*81)
    let myfetch=await fetch(`https://69a689a7feb94223b31d5279.mockapi.io/UserData/${r}`)

    let myData=await myfetch.json()

    console.log(myData);

    let myh2=document.createElement("h2")
    myh2.innerHTML=myData.name

    mysection.append(myh2)
})

put.addEventListener("click",async ()=>{

    let obj2={
        name:'Dhoni'
    }
    let fetch1=await fetch('https://69a689a7feb94223b31d5279.mockapi.io/UserData/50',{
        method:"PUT",
        Headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(obj2)
    })

    let myData=await fetch1.json()
    console.log(myData);
    
})

myDelete.addEventListener("click",async ()=>{
    let myRes2=await fetch('https://69a689a7feb94223b31d5279.mockapi.io/UserData/55',{
        method:"DELETE"
    })

    let data=await myRes2.json()
    console.log(data);
})
