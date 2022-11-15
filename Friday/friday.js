
const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")
const speakBtn = document.querySelector("#speak")
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

document.querySelector("#start_jarvis_btn").addEventListener("click", () => {
    recognition.start()
})

let fridaycoms = []
fridaycoms.push("what are your commands");
fridaycoms.push("are you there friday");
fridaycoms.push("hello friday");


const recognition = new SpeechRecognition()
recognition.onstart = function () {
    console.log("VR Active");
}


/*fridaycoms.forEach((e) => {
    document.querySelector(".commands").innerHTML += '<p> #${e} </p> <br>'
})*/

recognition.onresult = function (event) {
    let current = event.resultIndex
    let transcript = event.results[current][0].transcript;
    transcript = transcript.toLowerCase();
    if (transcript.includes("hello")) {
        readOut("Hello Sir, How are you?")
    }

    if (transcript.includes("what are your commands")) {
        readOut("Sir, These are my commands")
        document.querySelector(".commands").style.display = "block";
    }




    if (transcript.includes("open youtube")) {
        readOut("openning youtube sir ")
        window.open("https://www.youtube.com/")
    }

    if (transcript.includes("question 1")) {
        readOut("Question. What were the IMF and the World Bank designed for? What made them shift their attention towards developing countries? Answer The IMF and the World Bank were designed to meet the financial requirements of industrial countries. They were known as the Bretton Woods Twins. They were not equipped to deal with the challenges of poverty and lack of development in the former colonies. Fortunately, Europe and Japan rapidly rebuilt their economies and grew less dependent on the IMF and the World Bank. As a result, IMF and the World Bank began to shift their attention more towards developing countries. The major challenge before the newly independent and developing countries was to help the majority of the people to come out of the severe poverty. Even after many years of decolonisation, the former colonial powers still controlled vital resources such as minerals and land in some of their colonies. Even the US also often enjoyed the rights to exploit natural resources of the developing countries very cheaply.The formation of the group of 77 developing countries (G-77) helped these countries to demand a New International Economic Order (NIEO) that would give them real control over their natural resources, more development assistance, fairer prices for raw materials and better access for their manufactured goods in developed countries markets.")

    }

    if (transcript.includes("question 2")) {
        readOut("Question. Describe the effect of the Great Depression on the world? Who were the worst affected by this depression? Answer. The Great Depression began around 1929 and lasted till the mid-1930s. During this period, there were catastrophic declines in production, employment, incomes and trade. Agricultural regions and communities were worst affected due to the great fall of agricultural prices. In the US, farmers could not sell their harvests, households were ruined and businesses collapsed. Many households in the US could not repay their loans due to fall in their income and were forced to give up their homes, cars and other consumer durables. Unemployment increased rapidly and people had to travel long distances in search of work. The Great Depression’s wider effects on society, politics and international relations and on peoples needs proved more enduring. The Depression immediately affected Indian trade. India’s exports and imports halved between 1928 and 1934.  Peasants and farmers suffered more than urban dwellers. Though argicultural prices fell sharply, the colonial government refused to reduce revenue demands. Peasants producing for the world market were the worst hit. Across India, peasants indebtedness increased.")
    }




    if (transcript.includes("open brilliant brain")) {
        readOut("openning brilliant brainz ")
        window.open("https://briilliantbrainz.github.io/knowledgehub/")
    }

    if (transcript.includes("open google")) {
        readOut("openning google sir..")
        window.open("https://www.google.com/")
    }

    if (transcript.includes("search for")) {
        readOut("Here's the results")
        let input = transcript.split("")
        input.splice(0, 10);
        input.pop()
        input = input.join("").split(" ").join("+")
        console.log(input)

        window.open(`https://www.google.com/search?q=${input}`)
    }

    console.log(transcript)
    //readOut(transcript)
}

recognition.onend = function (event) {

    console.log("VR DEACTIVE");
}

recognition.continuous = true;

startBtn.addEventListener("click", () => {
    recognition.start();
})

stopBtn.addEventListener("click", () => {
    recognition.stop();
})

function readOut(message) {
    const speech = new SpeechSynthesisUtterance()
    const allvoices = speechSynthesis.getVoices();
    speech.voice = allvoices[4]
    speech.text = message;
    speech.volume = 1
    window.speechSynthesis.speak(speech)
    console.log("Speaking Out")
}

speakBtn.addEventListener("click", () => {
    readOut("hi Dear How are you lets code something new today ")
})

window.onload = function () {
    readOut(" ")
}