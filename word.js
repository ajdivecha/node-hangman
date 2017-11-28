// Requires our letter module from letter.js
var Letter = require("./letter.js");
var game = require ("./game.js");
//-------------------------------------------

// word consctructor - builds the game play word
var WordConstructor = function(word) {

    this.word = word;
    this.letterArray = word.split("");
    this.letterObjects = [];
    this.blanksArray = [];
    this.blankString = "";

    this.blanks = function() {
        for (var i = 0; i < this.letterArray.length; i++) {
            if (this.letterArray[i] === " ") {
                this.blanksArray.push(" ");
            }
            else {
                this.blanksArray.push("_");
            }
        }
    };

    this.strings = function() {
        this.blankString = "";
        for (var i = 0; i < this.blanksArray.length; i++) {
            this.blankString = this.blankString + " " + this.blanksArray[i];
        }
    };

    this.checkGuess = function(guess) {
        if (this.letterArray.indexOf(guess) > -1) {
            for (var i = 0; i < this.letterArray.length; i++) {
                if (this.letterArray[i] === guess) {
                    this.blanksArray[i] = guess;
                    this.strings();
                    guess.shown = true;
                }
            }
        }
        else if (this.letterArray.indexOf(guess) === -1) {

            guessesLeft --;
        }
    };
};

module.exports = WordConstructor;
