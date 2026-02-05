let ipl=["csk",'mi','rcb','kkr','pbks','dc','srh','lsg','gt','rr']

// iteration methods or higher order methods

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

let resultForeach=ipl.forEach((e,i,team)=>{
    return (e,i,team)//undefined
})
console.log(resultForeach);

let resultMap=ipl.map((e,i,team)=>{
    // return `${e.toUpperCase()} ${e.length}`
    if(e.includes("s"))
        return e
})
console.log(resultMap);

let resultFilter=ipl.filter((e,i,team)=>{
    if(e.includes("k"))
        return e
})
console.log(resultFilter);

let resultFind=ipl.find((e,i,team)=>{
    if(e.includes('s'))
        return e
})
console.log(resultFind);//it will give only first word tht contains 's'=>o/p=csk (only)

