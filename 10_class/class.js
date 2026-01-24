// function Abc(x,y,z){
//     this.name=x
//     this.price=y
//     this.rating=z
// }
// let obj1=new Abc("watch",2000,6.5)
// console.log(obj1);
// class movies{
//     constructor(a,b,c){
//         this.name=a
//         this.price=b
//         this.rating=c
//     }
// }

//     let obj1=new movies("mankatha",200,7)
//     let obj2=new movies("thalaiva",250,6)
//     let obj3=new movies("rrr",230,8)
//     console.log(obj1);
//     console.log(obj2);
//     console.log(obj3);

// class bikes{
//     constructor(name,price,cc,model){
//         this.name=name  
//         this.price=price
//         this.cc=cc
//         this.model=model
//     }
// }
//     let a=new bikes("pulsar",150000,125,'pulsar150')
//     let b=new bikes("Ninja",400000,300,"zr320")
//     let c=new bikes("RE",200000,200,"thunderBold")
//     let d=new bikes("XL100",80000,100,"TVS100")
//     let e=new bikes("TVS50",20000,50,'TVS50')

//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
//     console.log(e);
    
//  let object=new Object()
//  console.log(object);
    
// let obj={
//     name:'sri',
//     nickname:'selva',
//     greet:function(){ //this is method not a function
//         console.log(`good morning ${this.name}`)
//     },
//     aim(){
//         console.log("to win championship in racing");
//     }
// }
// obj.greet()
// obj.aim()
    
// let obj1={
//     brand:"rolex",
//     product:"watch",
//     greet1:function(){
//         console.log(`i bought new ${this.product} in ${this.brand} brand`)
//     },
//     aim1(){
//         console.log(`i sell ${this.product} to 5$`);
//     }
// }
// obj1.greet1()
// obj1.aim1()

    // function Actor(x,y){
    //     this.name=x
    //     this.nickname=y
    //     this.greet=function(){
    //         console.log(`good morning from ${this.nickname}`);
    //     }
    //     this.aim=function(){
    //         console.log(`Welcome chief Minister of TamilNadu ${this.name} ${this.nickname}`);
    //     }
    // }
    // let object=new Actor("Vijay","Thalapathy")
    // object.greet()
    // object.aim()

    class Actor{
        constructor(x,y){
            this.name=x
            this.nickname=y
        }
        greet(){
            console.log(`good evening from ${this.name}`);
        }
        aim(){
            console.log(`nickname is ${this.nickname}`);
        }
    }
    let obj=new Actor("dhanush","dhanush kraja")
    obj.greet() 
    obj.aim()
    