// let myPromise=new Promise((res,rej)=>{//it is an objecct created by promise constructor
// // res('success')
// rej("rejected")
// })
// // pending, fulfill, reject
// myPromise.then((ele)=>{//when promise is resolve then only promise.then will executing[[]]
//     console.log('i am from then');
//     console.log(ele);
// }).catch((any)=>{
//     console.log('i am from catch');
//     console.log(any);
// }).finally(()=>{
//     console.log('i am from finally');
   
// })

let proposal=new Promise((resolve,reject)=>{

    console.log('will you marry me ?');
    let luck=Math.floor(Math.random()*2)
    console.log(luck);
    
    if(luck){
        resolve('he will get chocolate')
    }
    else{
        reject('he will get tears')
    }
})
// proposal.then((a)=>{
//     console.log(a);
// }).catch((b)=>{
//     console.log(b);
// }).finally(()=>{
//     console.log('party with friends');
// })

async function abc() {
    try{
        let res=await proposal//await will only work async function
        console.log(res);
    }
    catch(e){
        console.log(e);
        
    }

    
} 

abc()
// let str="i am string"
// let revstr=str.split("").reverse().join("")
// console.log(revstr);
