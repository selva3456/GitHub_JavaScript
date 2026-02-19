// setTimeout(()=>{
//     console.log("hello good morning");
// },5000)

// let count=0;
// let abc=setInterval(() => {
//     count++;
//     console.log(count);
    
//     if(count==5){
//         clearInterval(abc);
//     }
// },3000);

// let head=document.querySelectorAll("h1")
// console.log(head);
// console.log(head.innerText);
// console.log(head.textContent);
// console.log(head.innerHTML);

// let div=document.querySelectorAll("div")[0]
// console.log(div);
// console.log(div.innerHTML);//tag along with the text 
// console.log(div.innerText);//only the text content ,not get space or nothing
// console.log(div.textContent);//it will provide text and space

let myhead=document.querySelectorAll("h1")[1]

myhead.innerHTML='Thala Dhoni'
// myhead.innerText='mddhhdh'
// myhead.textContent='kkiillkk' //this above three are same innerhtml,innertext and textcontent

let anchor=document.querySelectorAll('a')[0]
anchor.innerHTML="i am anchor tag"

let btn=document.querySelector('button')//using querySelector no need of index number[0]
btn.innerHTML="i am para 1"

let title=document.querySelector("title")
// title.innerHTML="Dom Update"//above title changed

setInterval(() => {
    if(title.innerHTML=="Update")
        title.innerHTML="$$Dom Update$$" 
    else 
        title.innerHTML="Update"      
},2000);




