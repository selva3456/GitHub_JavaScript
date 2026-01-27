let a="nickname"
a1="finisher"
let obj={
    name:"dhoni",
    age:45,
    "role":"captain",
    1:"finisher",
    any:a,
    a:"some values",//this is a variable container to store
    [a]:"ms",// using [a] it will take the a's value as a variable
    [a1]:"msd"
 }
console.log(obj)

let obj1={
    name:"ms dhoni",
    age:45,
    name:"virat",
}
console.log(obj1);


// console.log(obj);
// console.log(obj.name);
// console.log(obj["age"]);
// console.log(obj.role);
// console.log(obj["1"]);



// function table(n){
//     for(let i=1;i<=10;i++){
//     console.log(`${i}x${n}=${i*n}`);    
//     }
// }
// table(7)

