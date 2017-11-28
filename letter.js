// Requires our Word module from word.js
var Word = require("./word.js");

//---------------------------------------

// letter constructor
var Letter = function(letter) {
   this.letter = letter;
   this.shown = false;
};

// exports letter to 
module.exports = Letter;