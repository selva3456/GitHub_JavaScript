class player{
    constructor(name,age,sport){
        this.name=name
        this.age=age
        this.sport=sport
    }
    info(){
        console.log(`player name is ${this.name} his age is ${this.age}`)
    }
    static greet(){
        console.log('good morning');
    }
}

let p1=new player("dhoni",45,"cricket")
let p2=new player("ronaldo",37,"football")
p1.info()
p2.info()
player.greet()

let obj1={
    name:"rrr",
    age:23,
    role:"developer"
}
let obj2={
    name:"dfr",
    age:34,
    role:"testing"
}
console.log(Object.keys(obj1))
console.log(Object.values(obj1));
console.log(Object.keys(obj2));
console.log(Object.values(obj2));

console.log(Object.entries(obj1));
console.log(Object.entries(obj2));

obj1.name="hhh"
obj1.team="team"
console.log(obj1);
delete obj1.team
console.log(obj1);

obj2.name="mnop"
obj2.team="member"
delete obj2.team
console.log(obj2);

let obj3={
    name:"dddd",
    age:66,
    role:"automation"
}
console.log(obj3);
//***** 
// important for interview d/b freeze and seal ***** 
Object.freeze(obj3)//we cannot delete,add,change anything from the given propeties
obj3.name="aaaa"
delete obj3.role
Object.seal(obj3)//we cannot delete,add it approves to change the existing properties
                 //not applicable for adding new property
obj3.team="dfrgt"
console.log(obj3);

console.log(Object.isFrozen(obj1));
console.log(Object.isFrozen(obj2));
console.log(Object.isFrozen(obj3));

let obj4={
    name:"kili",
    age:23
}
let obj5={
    name:"palli",
    age:32
}
Object.assign(obj4,obj5)

console.log(obj4.hasOwnProperty("name"));








