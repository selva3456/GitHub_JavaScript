let section=document.querySelector("section")

let myh1=document.createElement("h1")
myh1.innerHTML="iam from h1"
console.log(myh1);

let myInput=document.createElement("input")
myInput.type="text"
myInput.placeholder="Enter value"
console.log(myInput);

let myAnchor=document.createElement("a")
myAnchor.innerHTML="www.instagram.com"
console.log(myAnchor);

section.append(myh1,myInput,myAnchor );


let footer=document.querySelector("footer")

footer.innerHTML+=`<h1>Hello from footer h1</h1> <p>hii from paragraph</p> <button>Submit Here</button>`