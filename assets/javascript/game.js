
var possibleGuesses = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
console.log (possibleGuesses);

var wins = 0;
var losses = 0;
var guesses = 10;

    var computerChoice = possibleGuesses [Math.floor(Math.random() * possibleGuesses.length)];
    console.log (computerChoice)

document.onkeypress = function(event) {
    var userGuess = event.key;
    console.log (userGuess);

    if(userGuess === computerChoice){
        wins++;
    } else if(userGuess !== computerChoice){
        losses++;
    } else { 
        guesses--;
    }
    

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guesses-left').innerHTML = "Guesses left: " + guesses;
    document.getElementById('guess-so-far').innerHTML = "Your Guess So Far: " + userGuess;
}


