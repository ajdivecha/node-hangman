// Requires our Word module from word.js
var WordConstructor = require("./word.js");
var game = require ("./game.js");
//---------------------------------------

// letter constructor
var Letter = function(letter) {
   this.letter = letter;
   this.shown = false;
};

// exports letter to
module.exports = Letter;
