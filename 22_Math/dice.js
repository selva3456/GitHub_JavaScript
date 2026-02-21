let player1Dice1H1=document.querySelector(".player1>.dice1>h1")
let player1Dice1Btn=document.querySelector(".player1>.dice1>button")

let player1Dice1Value=null
let player1Dice2Value=null

player1Dice1Btn.addEventListener("click",()=>{
    player1Dice1Value=Math.ceil(Math.random()*6)
    player1Dice1H1.innerHTML=player1Dice1Value    

    player1Dice1Btn.disabled=true
    player1Dice2Btn.disabled=false
})

let player1Dice2H1=document.querySelector(".player1>.dice2>h1")
let player1Dice2Btn=document.querySelector(".player1>.dice2>button")

player1Dice2Btn.addEventListener("click",()=>{
    player1Dice2Value=Math.ceil(Math.random()*6)
    player1Dice2H1.innerHTML=player1Dice2Value

})

let player1Total=document.querySelector(".player1>.total>h1")

player1Dice2Btn.addEventListener("click",()=>{
    player1Total.innerHTML=`Total:${player1Dice1Value+player1Dice2Value}`
})

let player2Dice1H1=document.querySelector(".player2>.dice1>h1")
let player2Dice1Btn=document.querySelector(".player2>.dice1>button")

let player2Dice1Value=null
let player2Dice2Value=null

player2Dice1Btn.addEventListener("click",()=>{
    player2Dice1Value=Math.ceil(Math.random()*6)
    player2Dice1H1.innerHTML=player2Dice1Value

    player2Dice1Btn.disabled=true
    player2Dice2Btn.disabled=false
})

let player2Dice2H1=document.querySelector(".player2>.dice2>h1")
let player2Dice2Btn=document.querySelector(".player2>.dice2>button")

player2Dice2Btn.addEventListener("click",()=>{
    player2Dice2Value=Math.ceil(Math.random()*6)
    player2Dice2H1.innerHTML=player2Dice2Value
})

let player2Total=document.querySelector(".player2>.total>h1")

player2Dice2Btn.addEventListener("click",()=>{
    player2Total.innerHTML=`Total:${player2Dice1Value+player2Dice2Value}`
   
if(player1Total.value>player2Total.value){
    console.log("Player 1 won the match");
}
else{
    console.log("Player 2 won the match");
}
})
