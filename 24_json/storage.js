// let myarr=[10,20,30,40]

// localStorage.setItem('name','selva')
// localStorage.setItem('phno','87987987')
// localStorage.setItem('email','kk@gmail.com')
// localStorage.setItem('arr',[10,20,30])
// // localStorage.setItem('myarr',myarr) //the above also same
// localStorage.setItem('arr2',JSON.stringify([10,20,30]))
// // localStorage.setItem('arrjson',JSON.stringify(myarr)) //the above also same

// let obj={
//     name:"selva",
//     phno:9876090,
//     email:'skk@gmail.com'
// }
// localStorage.setItem('obj',obj)
// localStorage.setItem('obj1',JSON.stringify(obj))

let a=localStorage.getItem('name')
console.log(a);

let ph=localStorage.getItem('phno')
console.log(ph);

let obj1=localStorage.getItem('obj1')
console.log(obj1);

let myarr2=localStorage.getItem('arr2')
console.log(myarr2);

let myarr=localStorage.getItem('arr')
console.log(myarr);

let jsMyarr2=JSON.parse(myarr2)
console.log(jsMyarr2);

let jsMyObj1=JSON.parse(obj1)
console.log(jsMyObj1);















// sessionStorage.setItem('mobile','9876543')
