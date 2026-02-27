// let myfetch=fetch()

// myfetch.then((e)=>{
//     console.log("from then");
//     console.log();    
// }).catch((e)=>{
//     console.log('from catch');
//     console.log(e);
// })

// async function Abc() {
//     try {
//     let myfetch=await fetch()   
//     } catch (e) {
//         console.log(e);
//     }
// }
// Abc()

// let myfetch=fetch('https://api.escuelajs.co/api/v1/products')
// console.log(myfetch);//fetch will return promise
                       //return type of fecth() is fetch

// myfetch.then((res)=>{
//     console.log(res);

//  let data=res.json()
//  console.log(data);//this will also return another promise
 
//  data.then((ab)=>{
//     console.log(ab);
//  })
// }).catch((e)=>{
//     console.log("error catched");
// }

// async function abc() {
//     let res=await fetch('https://api.escuelajs.co/api/v1/products')
//     let data=await res.json()
//     // console.log(res);
//     console.log(data);
// }
// abc()

// let fakefetch=await fetch('https://fakestoreapi.com/products')

// fakefetch.then((res)=>{
//     console.log(res);
//     let data=res.json()
//     console.log(data);

//     data.then((ab)=>{
//         console.log(ab);
//     })
// })

// async function response() {
//     let res=await fetch('https://fakestoreapi.com/products')
//     let data=await res.json()
//     console.log(data);
// }
// response()

let myfetch1=fetch('https://www.shoppersstack.com/shopping/products/alpha')
myfetch1.then((res)=>{
    console.log(res);
    let data=res.json()

    data.then((e)=>{
        console.log(e);
    })
})

