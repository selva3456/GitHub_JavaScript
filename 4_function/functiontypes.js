//named function
function add(a,b){
    console.log(a+b)
}
add(2,6)

//anonymus function //without name
//function(){

//} it is error
//function with expression
let namedFunction=function abc(){
    console.log('this is name function of function with expression');
}
namedFunction()

let iamAnonymousFunctionExpression=function (){
    console.log('this is anonymous function');
}
iamAnonymousFunctionExpression();

//IIFE-->immediatly Invoked Function Expression

(function(){
    console.log('i am IIFE function');
})()

//arrow function

// syntax 1--> let arrow= ()=>{}

let arrow= (a,b)=>{
    console.log(a);
    console.log(b);
    return (a+b);    
}
console.log(arrow(10,20));
console.log("*******************");

let subb=(x,y)=>{
    console.log(x)
    console.log(y)
    return x-y
}
console.log(subb(50,20))
console.log("*********************")
let mull=(x2,y2)=>{
    console.log(x2);
    console.log(y2);
    return y2*x2
}
console.log(mull(5,40))
console.log('***************************');

//without curlybraces
let one=(a1,b1)=>console.log(a1+b1)
one(10,20)
console.log('*********************');

//syntax 2 --> let arrowmul=(a,b)=>a*b
let arrowMul=(a,b)=>a*b
console.log(arrowMul(5,20))
console.log('*************************')

//syntax 3 -->let arrow = a=> a*a

let ab=a=>a*a
console.log(ab(15))
console.log('********************')

// 10/01/2025
//nested function | it is not that much important
//Lexical Scope

function parent(){
    let a=20
    let b=40
    console.log('i am from parent')
    console.log(a*b)

    function child(a1,b1){
        console.log('i am from child')
        console.log(a1+b1)

        console.log(a)
        console.log(b)
        return ("hello")
    }
   console.log(child(10,20)); 
}
parent()

console.log('**********************');

//Scope Chain
let x=1000//globalscope

function parentscope(){
    let x=100
    function childscope(){
        let x=10
        console.log(x)
    }
    childscope()
}
parentscope()
console.log('********************')
//Closure (important for interview)
//closure is a scope.it will be created only in inner function for outer function variable. not for all variable only for the variable which has been accessed in inner function
function kanama(){
      let a="relationship"
      let b="memories"
    function muniyandi(){

        // console.log(b);
    }
    muniyandi()
    // return muniyandi
}
kanama()
let res=kanama()
// console.log(res);
// console.log("************************");

//higher order function
let first=500
let second=1000

function root(x,y,z){
    return z(x,y);
}
function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function mul(a,b){
    return a*b
}
function div(a,b){
    return a/b
}
function mod(a,b){
    return a%b
}
console.log(root(first,second,add));
console.log(root(3000,1000,sub));
console.log(root(5,200,mul));
console.log(root(2500,2,div));
console.log(root(120,5,mod));
 // root --- higher order function




