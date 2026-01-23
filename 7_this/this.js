// let obj={
//     name:"selva",
//     email:"selva123@gmail.com",
//     mobile:987654321,
//     degree:"BE",
//     graduate:true,
//     hell:function(){
//         console.log("i am method");
//     }
// }
// obj.hell()
// console.log(obj.name);
// console.log(obj.email);
// console.log(obj.degree);
// console.log(obj.mobile);
// console.log(obj.graduate);

// function abc(){
//     console.log("i am function")
// }
// abc()

// console.log(this);//window object or global object

// function a(){
//     console.log(this)
// }
// a()

// let myobj={
//     name:"selva",
//     phone:234567891,
//     life:function(){
//         console.log(this);//myobj
//     }
// }
// myobj.life(this)
// let obj1={
//     name:"sri",
//     greet:function(){
//         console.log("good morning "+this.name);
//     }
// }
// let obj2={
//     name:'selva',
//     greet:function(){
//         console.log("good afternoon "+this.name);
//     }
// }
// let obj3={
//     name:`sakthi`,
//     phno:2345678,
//     greet:function(){
//         console.log("good night "+this.name+","+this.phno)
//     }
// }
// obj1.greet()
// obj2.greet()
// obj3.greet()

// let obj1={
//     name:"vijay",
//     age:55,
//     ad:"cococola"
// }
// let obj2={
//     name:'ajith',
//     age:50,
//     ad:"campa"
// }
// let obj3={
//     name:'surya',
//     age:45,
//     ad:"bru coffee"
// }
// function abc(){
//     console.log(this.name+","+this.ad);
// }
// abc.call(obj1)
// abc.call(obj2)
// abc.call(obj3)

let obj1={
    name:'selva',
    phno:123,
    greet:function(){
        console.log("good morning "+this.name+","+this.phno);
    }
}
let obj2={
    name:"sakthi",
    phno:456
}
let obj3={
    name:`maari`,
    phno:789,
}
obj1.greet()
obj1.greet.call(obj2)
obj1.greet.call(obj3)