// let product={
//     name:'phone',
//     price:25000,
//     "rating":6.5,
//     brand:"vivo"
// }
// // console.log(product.name);
// // console.log(product['price']);

//     let {name,price,brand}=product  //order is not important
//     console.log(name);
//     console.log(price);
//     console.log(brand);
//     console.log(product.rating);
    
//destructuring

//     let ipl=['aa','bb','cc','dd']
         
//         let  [any,second,ht,ml]=ipl  //order is important
//         console.log(any);
//         console.log(second);
//         console.log(ml);
//         console.log(ht);
        
let obj={

    name:'rkk',
    age:23,
    phone:213456,
    email:"rkk@gmail.com"
}   

// let {name,...obj2}=obj  //...obj2 is rest
// // let {...obj2,name,}=obj//A rest element must be last in a destructuring pattern.
// console.log(name);
// console.log(obj2.name);//undefined
// console.log(obj2.email);


// let abc=["wwe",'wwe2','wwe3','wwe4']

// let [w,...abc2]=abc

// console.log(w);
// console.log(abc2);
// let [a,b,...ab1]=abc2
// console.log(a);
// console.log(b);
// console.log(ab1);


function any(a,b,...rest) {
        console.log(a);
        console.log(b);
        console.log(rest);
        
}
any("hi",'world','hello','123','abcdef')







    
    
    

