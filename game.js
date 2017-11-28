// Requires our Word module from word.js && Letter module from letter.js
var WordConstructor = require("./word.js");
var Letter = require("./letter.js");

// Requires npm inquirer - installed
var inquirer = require("inquirer");

//---------------------------------------

// Variables
var wordChoices = ["porsche", "bugatti", "mercedes", "jaguar", "range rover", "alfa romeo"];
// store word objects
var currentWord;
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
    guessesLeft = 7;
    wrongGuesses = 0;
    userGuesses = [];

    inquirer
    .prompt ([{
        type: "confirm",
        name: "start",
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
   currentWord = new WordConstructor(inPlay);
   currentWord.blanks();
   currentWord.strings();
   console.log(currentWord.blankString);
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// letterGuess function
function letterGuess(count) {
  if (guessesLeft > 0) {
    if (currentWord.blanksArray.indexOf("_") === -1) {
      console.log("way to go");
      startGame();
      return;
    }

  inquirer
  .prompt([{
    type: "input",
    name: "guess",
    message: "Guess a letter"
  }]).then(function (guess) {
    var userGuess = guess.guess;
    currentWord.checkGuess(userGuess);

    if(currentWord.letterArray.indexOf(userGuess) > -1) {
      console.log("good choice");
    }
    else if (currentWord.letterArray.indexOf(userGuess) === -1) {
      console.log("nope");
      guessesLeft --;
    }

    userGuesses.push(userGuess);
    console.log("you have " + guessesLeft + " guesses left");

    playCount++;
    letterGuess(playCount);
  });
} else {
    console.log("game over");
    startGame();
  }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
startGame();

// console.log(currentWord.blankString);
// console.log(currentWord);
// console.log(currentWord.blanksArray);
// console.log(currentWord.blankString);
