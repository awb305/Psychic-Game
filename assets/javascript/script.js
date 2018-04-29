//variables

var wins = 0;
var losses = 0;
var guesses = 9;
var userGuess = "";
var guessArray = [];
var computerGuess = "";

var text = "";
var possible = "abcdefghijklmnopqrstuvwxyz";

//functions

function computerLetter() {
  computerGuess = possible.charAt(Math.floor(Math.random() * possible.length));
}

function reset() {
  guesses = 9;
  userGuess = "";
  guessArray = [];
  computerLetter();
  console.log("Computer guess = " + computerGuess);
}

function updateGuesses() {
  document.getElementById("numberOfGuessesLeft").innerHTML = guesses.toString();
  document.getElementById("guessArray").innerHTML = guessArray.join(", ");
}

//main computation

computerLetter();
console.log("Computer guess = " + computerGuess);

document.onkeyup = function(event) {
  guessArray.push(event.key);
  userGuess = event.key;
  console.log("Event key = " + event.key);
  console.log("UserGuess = " + userGuess);
  console.log("guessArray = " + guessArray);

  if (computerGuess === userGuess) {
    wins++;
    document.getElementById("numberOfWins").innerHTML = wins.toString();
    reset();
    updateGuesses();
    //document.querySelector("#game").innerHTML = htmlText;
  } else if (guesses === 1) {
    losses++;
    document.getElementById("numberOfLosses").innerHTML = losses.toString();
    reset();
    updateGuesses();
  } else {
    guesses--;
    updateGuesses();
  }

  console.log(guesses);
  console.log("Current guess number = " + guesses);
  console.log("Current win number = " + wins);
  console.log("Current loss number =" + losses);
};
