function anyName() {
    console.log('2025 passed out');
}
anyName()

function e(){
    console.log(`hi hello world `);
}
e()

function add(a,b) {
    console.log(a)
    console.log(b)
    console.log(a+b);
    
}
add(1,2)

function d3(x,y,z) {
    console.log(x);
    console.log(y);
    console.log(z);
    console.log(x+y*z);
    console.log(x+'5')//105
    console.log(x*'5')//50
    console.log(x*'a')//NaN
    console.log(z+5)//NaN z is undefined 
                    //undefined + undefined =NaN(not a number)
}
d3(10,20,)

function a(x,y) {
    console.log('Hello')
    return x+y+"k"
}

 //let res1=a  
 //console.log(res1)//reperesent the entire function and function will not be called

let res2=a(10,10)
console.log(res2)//return the value of the function




