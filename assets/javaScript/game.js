//Variables that hold references to places in the HTML 
var hiddenDisplay = document.getElementById("hidden_answer");
var wrongDisplay = document.getElementById("wrong_text");
var winsDisplay = document.getElementById("wins");
var lossesDisplay = document.getElementById("losses");
var guessesDisplay = document.getElementById("guesses_remaining");

//creating global variables for the resetGame function
    //Starting simple but this have more answers later
var computerAnswer = ["cartman", "bobby", "sally"];
var charComputerAnswer;
var randComputerAnswer;
var hiddenAnswer;
var hiddenAnswerToDisplay;
var guessesRemaining;

//Creating a variable that is an array to store wrong Guess in
var wrongGuess = [];

//Creating global variables to track wins and losses
var wins = 0;
var losses = 0;


//Initialize Game by calling reset game function
resetGame();

//writing function to reset game
function resetGame() {
    //this randomizes the computer answers
    randComputerAnswer = computerAnswer[Math.floor(Math.random() * computerAnswer.length)];

    //this turns the answer into an array of characters
    charComputerAnswer = randComputerAnswer.split("");
    console.log("char computerAnswer is " +charComputerAnswer);
    console.log("length of charComputerAnswer "+charComputerAnswer.length)
    console.log("charComputerAnswer type is " + typeof charComputerAnswer);
    console.log("the first character in the answer is " +charComputerAnswer[0]);

    //this shows the user the number of characters in the answer
    hiddenAnswer = "_ ".repeat(charComputerAnswer.length);

    console.log(hiddenAnswer);
    console.log(hiddenAnswer.length);
    console.log("hiddenAnswer type is "+typeof hiddenAnswer);

    //this creates a new variable to display on DOM replacing commas in array w/ spaces
    hiddenAnswerToDisplay = hiddenAnswer.split(" ");
    hiddenAnswerToDisplay.pop();
    console.log("hiddenAnswerToDiplay " + hiddenAnswerToDisplay);
    console.log(hiddenAnswerToDisplay.length);
    console.log("hiddenAnswerToDisplay type is "+typeof hiddenAnswerToDisplay);
    console.log("the last in the object is a type of " + typeof hiddenAnswerToDisplay[3]);

    //Setting variable for guesses remaining
    guessesRemaining = 5;
}

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    // Determines which key was pressed and assigns to userGuess.
    var userGuess = event.key;
    console.log("the user pressed this key " +userGuess);

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
            console.log("s in for-if loop is " + s);
            // console.log("s is a type of" + typeof s);
        }
    }
    //this if statement will run if there is nothing in the s variable ie. user did not guess correctly
    if (s.length === 0 && wrongGuess.indexOf(" " + userGuess) === -1) {
        console.log('s out of the for-if loop' + s);
        wrongGuess.push(" " + userGuess);
        console.log("wrong guess is " + wrongGuess);
        //displaying wrong guesses to DOM isn't working
        wrongDisplay.textContent = wrongGuess;
    }
    console.log("hiddenAnswer to display looks like this outside the for loop " + hiddenAnswerToDisplay);

    // This displays the blanks to the user and replaces comma in an array with a space
    hiddenDisplay.innerHTML = hiddenAnswerToDisplay.join(" ");
    //Can't get below to write to DOM
    // wrongDisplay.innerHTML = wrongGuess;
    gameStatus();
}


function gameStatus() {
    if (charComputerAnswer === hiddenAnswerToDisplay) {
        console.log("charComputerAnswer inside loop to figure out game over is " + charComputerAnswer);
        console.log("hiddenAnswerToDisplay inside loop to figure out game over " + hiddenAnswerToDisplay);
        wins = wins++;
        console.log("wins " + wins);
        winsDisplay.innerHTML = "Wins: " + wins;
    }
}
