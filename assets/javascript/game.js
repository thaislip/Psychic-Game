
var possibleGuesses = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
console.log (possibleGuesses);

var wins = 0;
var losses = 0;
var guesses = 10;
var guessedLetters = [];
// if guesses equals 0, reset the game
//log guesses so far on screen
    var computerChoice = possibleGuesses [Math.floor(Math.random() * possibleGuesses.length)];
    console.log (computerChoice)

document.onkeypress = function(event) {
    var userGuess = event.key;
    console.log (userGuess);

    if(userGuess === computerChoice){
        wins++;
    } else if(userGuess !== computerChoice){
        losses++;
    }

    
    
    

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guesses-left').innerHTML = "Guesses left: " + guesses--;
    document.getElementById('guess-so-far').innerHTML = "Your Guesses So Far: " + userGuess;
    //game reset
    
}
