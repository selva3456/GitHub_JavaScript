// let ipl=["csk",'mi','rcb','kkr','pbks','dc','srh','lsg','gt','rr']

// //iteration methods or higher order methods

// console.log("foreach function");
// ipl.forEach(function(ele,i,arr){
//     console.log(ele,i,arr); 
// })

// console.log("foreach");
// ipl.forEach((a,i,teams)=>{
//     console.log(a,i,teams);
// })

// console.log("map");
// ipl.map((b,index,val)=>{
//     console.log(b,index,val);
    
// })

// console.log("filter");
// ipl.filter((c,ii,array)=>{
//     console.log(c,ii,array);
// })

// console.log("find");
// ipl.find((d,ind,val1)=>{
//     console.log(d,ind,val1);
// })

// console.log("findIndex");
// ipl.findIndex((e,element,array2)=>{
//     console.log(e,element,array2);
// })

// let resultForeach=ipl.forEach((e,i,team)=>{
//     return (e,i,team)//undefined
// })
// console.log(resultForeach);

// let resultMap=ipl.map((e,i,team)=>{
//     // return `${e.toUpperCase()} ${e.length}`
//     if(e.includes("s"))
//         return e
// })
// console.log(resultMap);

// let resultFilter=ipl.filter((e,i,team)=>{
//     if(e.includes("k"))
//         return e
// })
// console.log(resultFilter);

// let resultFind=ipl.find((e,i,team)=>{
//     if(e.includes('s'))
//         return e
// })
// console.log(resultFind);//it will give only first word tht contains 's'=>o/p=csk (only)

// let resultFindIndex=ipl.findIndex((e)=>{
//     if(e.includes("k")){
//         return e
//     }
// })
// console.log((resultFindIndex));

// let num=[1,2,3,4,5,6]

// let resultSome=num.some((e)=>{//any one element is divisible by 2 then return true
//                              //else false
//     if(e%2==0){
//         return e;
//     }
// })
// console.log(resultSome);

// let resultEvery=num.every((e)=>{//in array the all elements are divisible by 2
//                         //then return true else false
//     if(e%2==0){
//         return e
//     }
// })
// console.log(resultEvery);

// let num2=[5,10,15,20,25]

// let resultReduce=num2.reduce((a,e,i,arr)=>{//a stands for accumulator means groupof or additionof some elements

//     console.log(a,e)
//     return a+e
// })
// console.log(resultReduce);

// let resultReduceRight=num2.reduceRight((a,e,)=>{//it takes the ele from right side =>25
//     console.log(a,e);
//     return a+e
// })
// console.log(resultReduceRight);

// let arr=['biryani','pongal','vada','dosa']
// console.log(arr.toString(' '));//it will not accept arguments
// console.log(arr.join(' | '));//it will add accept arguments

// //similar to string methods
// console.log(arr.indexOf('vada'));
// console.log(arr.lastIndexOf('biriyani'));
// console.log(arr.includes("p"));
// console.log(arr.slice(0,3));




