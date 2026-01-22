// // var a
// // console.log(a);
// //  a=100;
// // console.log(a);

// // let b=100
// //     b=200
// //     console.log(b);

// // const c=500
// //     console.log(c);

// //     var n
// //     console.log(n)

// //     let f
// //     console.log(f)

// scope 
// 1.global scope->outside the function or block
// 2.block scope ->within the block{}
// 3.function scope or local scope ->within the function 


var a=100;
let b=200
const c=300
console.log("this area is global scope")
    console.log(a,b,c)

{
    var d=10;//global scope variable
    let e=20;//block scope variable
    const f=30;//block scope variable
    console.log("this is block scope area")
     console.log(a,b,c)
     console.log(d,e,f)
}

//var will not follow block scope
     console.log(d)
    //  console.log(e)//Uncaught ReferenceError: e is not defined
    //  console.log(f)//Uncaught ReferenceError: f is not defined
abc()
function abc(){
    var x=1000
    let y=2000
    const z=3000
    console.log("this is function scope or local scope area")
    console.log(a,b,c)
    console.log(x,y,z)
}

