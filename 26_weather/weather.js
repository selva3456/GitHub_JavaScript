let myInput=document.querySelector("input")
let myBtn=document.querySelector("button")
let myDiv=document.querySelector("div")


console.log(myInput,myBtn,myDiv);

myBtn.addEventListener("click",async ()=>{
    let myKey="ba3b6d622ab0ab765c9d898d6e6ee6ca"
let myfetch=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${myInput.value}&appid=${myKey}`)
let data=await myfetch.json()

let myH3=document.createElement("h3")
myH3.innerHTML=`city name : ${data.name}`

myTemp=document.createElement("h3")
myTemp.innerHTML=`Temperture : ${Math.floor(data.main.temp-273)}℃`

myWeather=document.createElement("h3")
myWeather.innerHTML=`climate : ${data.weather[0].main}`

myWind=document.createElement("h3")
myWind.innerHTML=`Wind speed : ${data.wind.speed}`

myDiv.append(myH3,myTemp,myWeather,myWind)



// console.log(data);
// console.log(myfetch);//fetch will accept 2 argument
//console.log(myKey);
})



