for(i=1;i>=100;i++){
    console.log(i);
}
for(i=100;i>=1;i--){
    console.log(i);
}

let a=1
while(a<=200){
    if(a%2==0){
        console.log(a);
    }
    a++
}

let ipl=["csk","rr","kkr","rcb","mi","srh","lsg","dc","gt","pbks"]
for(let i=0;i<=9;i++){
    console.log(ipl[i]);
}

for(let ele of ipl){//used to print the elements
    console.log(ele);
}

for(let ele1 in ipl){//in is used to print the index of ipl array
    console.log(ele1);
}

let obj={
    name:"mobile",
    price:100000,
    rating:8.8,
    availability:true
}

for(let key in obj){
    console.log(key+"::"+obj[key]);
    
    // console.log(`${key}:${obj[key]}`);
    
}

let ans=1342423
let b=20.0909
// let c=0987654
console.log(ans);
console.log(b);
console.log(c);

let d=new Number(10)
console.log(10);

let str1="abcd"
let str2="efgh"
let str3="klmn"
let str4=new String("mnop")

