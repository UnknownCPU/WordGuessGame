
var $ = funcion(id) {
    return document.getElementById(id);
}

    var game = ["January", "February", "March", "April"]
    var choice = Math.floor(Math.random()*4);
    var answer = game[choice];
    var myLength = answer.lenght;

    var display=[myLength];
    var win = myLength;
    var letters = answer.split('');
    var attemptsLeft = 10;
    var 
    var output = "";
    var userLetter = "";



var setup = function(){

        for (var i=0; i< answer.length; i++)
        {
            display[i] = "_ ";
            output = output + display[i];
        }
        document.getElementById("game").innerHTML = output;
        output ="";

        document.onkeyup = function (event) {


            var keyCode = event.keyCode;
            var userInput = String.fromCharCode(event.keyCode).toLowerCase();

}

var submit = function()
{
    output = "";
    userLetter = $("letter").value;
    $("letter").value ="";

    for (var c= 0; c< answer.length; c++)
    {
        alert(letters[c]);
        if (userLetter.toUpperCase() == letters[c])
        {
            display[c] = userLetter.toUpperCase();
            win--;
        }
            output = output + display[c] + " ";
}
document.getElementById("game").innerHTML = output;
output="";
attemptsLeft--;

if (win < 1)
{
    document.getElementById("guesses").innerHTML = "You Win!!";
}
else if (attemptsLeft < 1)
{
    document.getElementById("guesses").innerHTML = "You Lose!!";
}
else
{
    document.getElementById("guesses").innerHTML = "You have " +
    attemptsLeft + " guesses left";
    }

}



window.onload = function(){
    setup();
}

