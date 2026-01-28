
let b1=false
let c1=Boolean()//NaN, undefined, 0, "", null, ()->empty boolean also false
               // the above data's o/p will be false 
// let a=343
// if(a%2==0){
//     console.log(`${a} is even number`) 
// }else(
//     console.log(`${a} is odd number`)
// )
// let b=-9
// if(b>=0){
//     console.log(`${b} is positive number`);
// }else{
//     console.log(`${b} is negative number`);
// }

let amount=550

if(amount>40000){
    console.log("go to vietnam");
}else if(amount>10000)
    console.log("go to goa");
else if(amount>500 && amount<1000)
    console.log("Order mandi to eat");
else if(amount<100)
    console.log("stay in home to prepare food");

let day="sunday"

switch(day){
    case "monday":
    console.log("eat biriyani");
    break
    case "tuesday":
    console.log("eat tomato rice");
    break
    case "wednesday":
        console.log("eat rasam");
        break
    case "thursday":
        console.log("eat kushka");
        break
    case "friday":
        console.log("eat sambar");
        break
    case "saturday":
        console.log("eat chicken 65");
        break
    case "sunday":
        console.log("eat chicken fried rice");
        break
}

let x=500
let result= x%2==0? "even": "odd"
console.log(result);

