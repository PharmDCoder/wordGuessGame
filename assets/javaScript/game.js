//Variables that hold references to places in the HTML 
var hiddenDisplay = document.getElementById("hidden_answer");
var wrongDisplay = document.getElementById("wrong_text");
var winsDisplay = document.getElementById("wins");
var lossesDisplay = document.getElementById("losses");
var guessesDisplay = document.getElementById("guesses_remaining");

//creating global variables for the resetGame function
    //Starting simple but this have more answers later
var computerAnswer = ["homer", "marge", "bart", "lisa", "maggie", "abraham", "apu", "barney", "krusty", "itchy", "moe", "lenny", "otto", "ned", "ralph", "scratchy", "seymour", "carl", "nelson", "willie", "cletus", "duffman"];
var charComputerAnswer;
var randComputerAnswer;
var hiddenAnswer;
var hiddenAnswerToDisplay;
var guessesRemaining;
var wrongGuess;

//Creating global variables to track wins and losses
var wins = 0;
winsDisplay.innerHTML = "Wins: " + wins;

var losses = 0;
lossesDisplay.innerHTML = "Losses: " + losses;

//Initialize Game by calling reset game function
resetGame();

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    // Determines which key was pressed and assigns to userGuess.
    var userGuess = event.key;

    //Creating an array variable to store positions of correct guess
    var s = [];

    //This for loop will run through each element of charComputerAnswer array 
    for (index = 0; index < charComputerAnswer.length; index++) {
        //This if statement checks to see if userguess exists in charComputerAnswer array;
        if (userGuess === charComputerAnswer[index]) {
            //when condition met, changes the DOM display to show letters in correct position 
            hiddenAnswerToDisplay.splice(index, 1, userGuess);
            //this adds the index position where condition met to variable s
            s.push(index);
            playAudio("wahoo");
        }
    }
    //this if statement will run if there is nothing in the s variable ie. user did not guess correctly
    if (s.length === 0 && wrongGuess.indexOf(" " + userGuess) === -1) {
        wrongGuess.push(" " + userGuess);
        wrongDisplay.textContent = wrongGuess;
        guessesRemaining--;
        guessesDisplay.innerHTML = "Remaining Guesses: " + guessesRemaining;
        playAudio("doh");
    }
    
    // This displays the blanks to the user and replaces comma in an array with a space
    hiddenDisplay.innerHTML = hiddenAnswerToDisplay.join(" ");
    gameStatus();
}

//Writing function to check if user won or loss
function gameStatus() {
    //creating a variable with a boolean statement from a function that compares the array of answer vs array of letters guessed
    var gameWon =  charComputerAnswer.every(function(element, index) { 
        return element === hiddenAnswerToDisplay[index];
    });
    //creating if statement w/ boolean variable defined above
    if (gameWon) {
        //adds one win to total wins
        wins++;
        //updates win count on Dom
        winsDisplay.innerHTML = "Wins: " + wins;
        //calling function to play winning sound clip
        playAudio("smart");
        //calling function to reset game
        resetGame();
    //creating an else if statement to check to see if no guesses are left
    } else if(guessesRemaining === 0){
        //adds one loss to total losses
        losses++;
        //updates loss count on Dom
        lossesDisplay.innerHTML = "Losses: " + losses;
        //calling function to play winning sound clip
        playAudio("feeling_stupid");
        //calling function to repeat game
        resetGame();
    }

}

//writing function to reset game
function resetGame() {
    //Creating a variable that is an array to store wrong Guess in
    wrongGuess = [];

    //Need to reset wrong display
    wrongDisplay.innerHTML = "";

    //this randomizes the computer answers
    randComputerAnswer = computerAnswer[Math.floor(Math.random() * computerAnswer.length)];

    //this turns the answer into an array of characters
    charComputerAnswer = randComputerAnswer.split("");

    //this shows the user the number of characters in the answer
    hiddenAnswer = "_ ".repeat(charComputerAnswer.length);
    hiddenDisplay.innerHTML = hiddenAnswer;

    //this creates a new variable to display on DOM replacing commas in array w/ spaces
    hiddenAnswerToDisplay = hiddenAnswer.split(" ");
    hiddenAnswerToDisplay.pop();

    //Setting variable for guesses remaining
    guessesRemaining = 5;
    guessesDisplay.innerHTML = "Remaining Guesses: " + guessesRemaining;
}

//writing function to play audio
function playAudio(audioID) {
    var x = document.getElementById(audioID);
    x.play();
}