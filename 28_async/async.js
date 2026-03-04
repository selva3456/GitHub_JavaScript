let btn=document.querySelector("button") //important for interview****************

console.log("hiii");

setTimeout(() => {
    console.log("hello");
}, 3000);

let mypromise=new Promise((res,req)=>{
    // console.log('vanakkam');
    res("vanakam")
}).then((e)=>{
    console.log(e);
    
})

// for (let i = 1; i <=10000;i++){
//     console.log('vanakam');
// }
console.log("End");
//it will block the excution|| by nature js is synchronize

//call stack
//web API
//callback queue->microtask area & macrotask area
//event loop

//  web API
// ------------------
// dom(event type)  fetch
// timer           promise

// handling promise is only asynchronize and creatiion of promise is synchronize
// fetch and promise are inside microtask area | microtask only excute first
//creation of dom is synchronize
// deom(event type) and timer function are inside macrotask area