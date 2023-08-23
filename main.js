var enachrichten = JSON.parse(JSON.stringify(einfachenachrichten));
var snachrichten = JSON.parse(JSON.stringify(schwerenachrichten));
var exnachrichten = JSON.parse(JSON.stringify(extremenachrichten));

let nachricht = [];

function Start()
{
    var radioButtons = document.getElementsByName("difficulty");
    for(var i = 0; i < radioButtons.length; i++)
    {
        if(radioButtons[i].checked == true)
        {
            var difficulty = radioButtons[i].value;
            StartGame(difficulty);
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function selectNachricht(diff)
{
    let nachrichten = [];

    if (diff == "Einfach") {
        nachrichten = enachrichten
    }
    
    if (diff == "Schwer") {
        nachrichten = snachrichten
    }

    if (diff == "Unmöglich") {
        nachrichten = exnachrichten
    }

    return nachrichten[getRandomInt(nachrichten.length)]
}

function StartGame(diff)
{
    nachricht = selectNachricht(diff);

    document.getElementById("difficultyselection").remove();
    document.getElementById("text2").innerHTML = "";
    document.getElementById("text1").innerHTML = nachricht.nachricht;

    let guessField = document.getElementById("guessField");
    guessField.removeAttribute("hidden");
    guessField.focus();

    document.getElementById("confirmbtn").removeAttribute("hidden")

    document.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          confirmAnswer();
        } 
    });

}

function format(str) {
    return str.replace(/[.,\/#!$%\^'\*;:{}=\-_`~()]/g,"").replace("&","und").toUpperCase().replace(/\s/g,'')
}

function confirmAnswer() {
    let guessField = document.getElementById("guessField");
    let answer = guessField.value;

    if (format(answer) == format(nachricht.loesung))
    {
        showAnswer(true);
    }
    else
    {
        showAnswer(false);
    }
}

function showAnswer(success) {
    if (success) {
        document.getElementById("text2").innerHTML = "Richtig!";
    }
    else {
        document.getElementById("text2").innerHTML = "Falsch";
    }
}