let a=10
let b=a

console.log(a);
console.log(b);

// let obj={
//     title:"iphone17promax",
//     price:160000,
//     quantity:4,
//     brand:"iphone"
// }
// let obj2=obj  //it is copying the reference (#abc)
// console.log(obj2);
// console.log(obj);

// obj2.quantity=15
// console.log(obj2);
// console.log(obj);

// let obj3={...obj} //this is shadow copy
// console.log(obj3);

// obj3.price=179000
// console.log(obj3);

// let obj4=Object.assign({},obj)
// console.log(obj4);

let obj={
    name:"msd",
    team:"india",
    role:'captain',
    retired:true,

    local:{
        teamName:"csk",
        hisRole:"wk",
        isHeRetired:false
    }
}
// let obj2={...obj}
// obj2.role='wicket keeper'
// obj2.local.hisRole="captain"

// console.log(obj);
// console.log(obj2);
let obj3=JSON.parse(JSON.stringify(obj))     //object to string and string to js

obj3.local.hisRole="cajskdj"
console.log(obj3);
console.log(obj);

let obj4=structuredClone(obj)
obj4.local.hisRole="jjjjjjj"
console.log(obj4);







