let main=document.querySelector("main")

// let myfetch=fetch('https://api.escuelajs.co/api/v1/products')
// myfetch.then((p)=>{
//     console.log(p);
//     let data=p.json()
//     data.then((e)=>{
//         console.log(e);
//     })
// })

async function abc() {
    let myfetch1=await fetch("https://fakestoreapi.com/products")//response object will 
    // stored in myfetch1 her promise is handled//if not using await myfetch1 return type is promise
    // console.log(myfetch1);
    let data1=await myfetch1.json()
    // console.log(data1);
    data1.forEach((e)=>{
        console.log(e);

    let myH3=document.createElement("h2")
    myH3.innerHTML=e.title
    
    let myImg=document.createElement("img")
    myImg.style.height='350px'
    myImg.style.width='250px'
    myImg.src=e.image


    let myPrice=document.createElement("h3")
    myPrice.innerHTML=`price : ${e.price}`

    let myRating=document.createElement("h3")
    myRating.innerHTML=`Rating: ${e.rating.rate}`

    let myBtn=document.createElement("button")
    myBtn.innerHTML="Add To Cart"

    let myDiv=document.createElement("div")

    myDiv.append(myH3,myImg,myPrice,myRating,myBtn)

    main.append(myDiv);
    })
}
abc()