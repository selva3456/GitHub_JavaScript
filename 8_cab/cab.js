// console.log('ssss');
//     console.log("ddffffff");
//     console.log(`ddffdd
//         ddd`);
    
// let a=10
// let b=20

// console.log('the sum of $(a) and $(b) is $(a+b)');
// console.log("$(b) l");
// console.log(`The sum of ${a}+${b} is ${a+b}`);

let obj1={
    name:'abc',
    phno:123
}
let obj2={
    name:'lmn',
    phno:456
}
let obj3={
    name:`xyz`,
    phno:789
}
function abc(age,email){
    console.log(`my name is ${this.name} and phno is ${this.phno} and age is ${age} and email is ${email}`);
 }
// abc.call(obj1,22,"sss@gmail.com")
// abc.apply(obj2,[21,'12@gmail.com'])
// abc.apply(obj3,[31,'543@gmail.com'])

let newabc1=abc.bind(obj1,26,'aws@gmail.com')
newabc

let newabc2=abc.bind(obj2,22,'sddds@gmail.com')
newabc2

let newabc3=abc.bind(obj3,23,'we@gamil.com')
newabc3