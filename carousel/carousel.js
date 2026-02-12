// let input=document.getElementsByTagName("input")[0]
// console.log(input.type);
// console.log(input.name);
// console.log(input.placeholder);
// console.log(input.id);
// console.log(input.className);//in js class is a reserved keyword

// input.type="password"
// input.placeholder="Enter the text name"
// console.log(input.type);
// console.log(input.placeholder);

let myimg=document.getElementsByTagName("img")[0]//here this imgtag index important 
// console.log(myimg);
// console.log(myimg.src);
// console.log(myimg.alt);
let index=0
let storage=["./image/download.jfif","./image/download (1).jfif"
            ,"./image/download (2).jfif","./image/download (3).jfif",
            "./image/download (4).jfif"]
    
setInterval(() => {
    
    if(index==storage.length){
        index=0
    }
    myimg.src=storage[index]
    index++;
}, 2000);
// console.log(myimg.src);

 
