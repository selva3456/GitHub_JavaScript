let mybtn=document.querySelector("button")
let myText=document.querySelector("textarea")
let mySelect=document.querySelector("select")

// console.log(speechSynthesis.getVoices());

let allVoices=null
speechSynthesis.addEventListener("voiceschanged",()=>{
    
    allVoices=speechSynthesis.getVoices()

    allVoices.forEach((e,i,arr)=>{

        let myOption=document.createElement("option")
        myOption.innerHTML=e.name
        myOption.value=e.name

        mySelect.append(myOption)

    })
})
mybtn.addEventListener("click",()=>{
    
    let myspeak=new SpeechSynthesisUtterance(myText.value) //inbuilt function
    let onevoice=allVoices.find((e)=>{
        if(e.name==mySelect.value){
            return e
        }
    })
    // console.log(onevoice)
    
    myspeak.voice=onevoice
       
    // myspeak.voice=voices[2]

    // myspeak.voice=allVoices[2]
    speechSynthesis.speak(myspeak)  //inbuilt object
})
 // console.log(speechSynthesis.getVoices());
 // let allVoices=speechSynthesis.getVoices()
