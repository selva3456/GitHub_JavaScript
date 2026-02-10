console.log(window);

let allh1=document.getElementsByTagName("h1");

console.log(allh1[0]);
console.log(allh1[1]);

let a=document.getElementsByTagName("a");
console.log(a[0]);

let b=document.getElementsByClassName("class1")
console.log(b);

let allAnchor=document.getElementsByClassName("class2")
console.log(allAnchor);
let allInput=document.getElementsByName("gender")
console.log(allInput);
console.log(allInput[0]);

let allcss1=document.querySelectorAll("h1")//tagname
console.log(allcss1);

let allcss2=document.querySelectorAll(".class1,.class2")//class name
console.log(allcss2);

let allcss=document.querySelectorAll("input")
console.log(allcss);

let id=document.getElementById("btn")
console.log(id);

let onecss=document.querySelector("#btn")
console.log(onecss);












