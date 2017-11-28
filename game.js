// Requires our Word module from word.js && Letter module from letter.js
var Word = require("./word.js");
var Letter = require("./letter.js");

// Requires npm inquirer - installed
var inquirer = require("inquirer");

//---------------------------------------

// Variables
var wordChoices = ["porsche", "bugatti", "mercedes", "jaguar", "range rover", "alfa romeo"];
// store word objects
var currentword;
// store letters guessed by player
var userGuesses = [];
// number of player lives 
// used later to restart
var guessesLeft = 7;
// keeps track of player progress per round
var playCount = 0;

//---------------------------------------

// Game Play Functions
// startGame function
function startGame() {
    guessesLeft = 0;
    wrongGuesses = 0;
    userGuesses = [];

    inquirer
    .prompt ([{
        type: "confirm",
        name: "start game",
        message: "Wanna play a game?",
    }]).then(function(data) {
        if (data.start === true) {
            gameWord();
            letterGuess(0);
        }
        else {
            console.log("Uhhhh bye-bye then...");
        }
    });
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// gameWord function
// generates word from, our word array, for game play
function gameWord() {
   var randy = Math.floor(Math.random() * ((wordChoices).length - 0 + 1)) + 0;
   var inPlay = wordChoices[randy];
   currentWord = new Word(inPlay);
   currentword.blanks();
   currentword.strings();
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// letterGuess function
function letterGuess () {

}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
