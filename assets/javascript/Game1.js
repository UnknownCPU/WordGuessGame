
console.log("let's go")

var gameWords = ["red", "green", "blue", "yellow"];
var wins = 0;
var userGuesses = 10;
var wordInPlay;

function start() {

    //Pick a random word

    var random = Math.floor((Math.random() * gameWords.lenght));
    wordInPlay = gameWords[random]
    console.log(wordInPlay);
    takeUserInput();
};

function takeUserInput () {


}


function youWin() {

    console.log("Yaaay");

};

function youLose() {

    console.log("Nooooooo");
};


start()