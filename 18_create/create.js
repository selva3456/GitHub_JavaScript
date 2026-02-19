let div=document.querySelector("div")

let h1=document.createElement("h1")
h1.innerHTML="i am from create js"
console.log(h1);

let a=document.createElement("a")
a.innerHTML="Click Here"
console.log(a);

let input=document.createElement("input")
input.type="text"
input.name="name"
input.placeholder="Enter your name"
console.log(input);

div.appendChild(h1)
div.appendChild(a)
div.appendChild(input)

//to add all the element at a time
// div.append(h1,a,input)

div.prepend(h1,a,input)//it will add the element in top of the page

div.innerHTML +="<h1>i am from</h1> <input type='password'> <button>submit</button>"
    