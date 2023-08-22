var nachrichten = JSON.parse(JSON.stringify(schwerenachrichten));

document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      confirmAnswer();
    } 
});

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

function StartGame(diff)
{
    document.getElementById("difficultyselection").remove();
    document.getElementById("text2").remove();
    document.getElementById("text1").innerHTML = nachrichten[0].nachricht;
}

function confirmAnswer() {

}