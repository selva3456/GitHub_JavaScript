console.log("Data Type in Java Script")
let num1=10
console.log(num1)
let num2=10.2
console.log(num2)

console.log(typeof num1)//number
console.log(typeof num2)//number

let str1="good morning"//String
console.log(str1+":"+typeof str1)

let str2='Good night'//here single quote is also consider as string there is no character
console.log(str2+":"+typeof str2)

//boolean
let isPlayer=false
console.log(isPlayer)
console.log(typeof isPlayer)

let isSelva=true
console.log(isSelva+":"+typeof isSelva);

let salary
// salary=1022
// salary=2000
console.log(salary)
console.log(typeof salary)//undefined

//null
let id =null

console.log(id+":"+typeof id)//null:object

// bigInt mostly not used in js
let num3=2n
console.log(num3+":"+typeof num3)//2:bigint

let num4=Number.parseInt(43.2)
let num5=Number.parseInt("45")
let num6=Number.parseInt("five")
let num7=Number.parseInt(`23rfe`)

console.log(num4)//43
console.log(num5)//45
console.log(num6+":"+typeof num6)//NaN:number
console.log(num7+":"+typeof num7)//23:number

let num8="40"
console.log(num8+":"+typeof num8)//40:string

console.log(10/2)// 5
console.log(9/2)// 4.5
console.log(123%10)// 3
console.log(123/10)// 12.3
console.log(parseInt(123/10))// 12
console.log(9**2)// 
console.log(4**2)// 

