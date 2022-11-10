
const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")
const speakBtn = document.querySelector("#speak")
const SpeechRecognition = window.SpeechRecognition  || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition()
recognition.onstart = function (){
    console.log("VR Active");
}

recognition.onresult = function(event){
    let current = event.resultIndex
    let transcript = event.results[current][0].transcript;

    console.log(transcript)
    readOut(transcript)
}

recognition.onend = function(event){
   
    console.log("VR DEACTIVE");
}

recognition.continuous =true;

startBtn.addEventListener("click", ()=>{
    recognition.start();
})

stopBtn.addEventListener("click", ()=>{
    recognition.stop();
})

function readOut(message){
    const speech = new SpeechSynthesisUtterance()
    const allvoices = speechSynthesis.getVoices();
    speech.voice = allvoices[4]
    speech.text = message;
    speech.volume = 1
    window.speechSynthesis.speak(speech)
    console.log("Speaking Out")
}

speakBtn.addEventListener("click", ()=>{
    readOut("hi Dear How are you lets code something new today ")
})

window.onload = function(){
    readOut(" ")
}