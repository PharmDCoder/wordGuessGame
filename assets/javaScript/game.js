//Variables that hold references to places in the HTML - this isn't working
var hiddenDisplay = document.getElementById("hidden_answer");
var wrongDisplay = document.getElementById("wrong_text");

//Starting simple but this have more answers later
var computerAnswer = ["cartman", "bobby", "sally"];

//this randomizes the computer answers
var randComputerAnswer = computerAnswer[Math.floor(Math.random() * computerAnswer.length)];

//this turns the answer into an array of characters
var charComputerAnswer = randComputerAnswer.split("");
console.log("char computerAnswer is " +charComputerAnswer);
console.log("length of charComputerAnswer "+charComputerAnswer.length)
console.log("charComputerAnswer type is " + typeof charComputerAnswer);
console.log("the first character in the answer is " +charComputerAnswer[0]);

//this shows the user the number of characters in the answer
var hiddenAnswer = "_ ".repeat(charComputerAnswer.length);

console.log(hiddenAnswer);
console.log(hiddenAnswer.length);
console.log("hiddenAnswer type is "+typeof hiddenAnswer);

var hiddenAnswerToDisplay = hiddenAnswer.split(" ");
console.log("hiddenAnswerToDiplay " + hiddenAnswerToDisplay);
console.log(hiddenAnswerToDisplay.length);
console.log("hiddenAnswerToDisplay type is "+typeof hiddenAnswerToDisplay);
console.log("the last in the object is a type of " + typeof hiddenAnswerToDisplay[3]);

//Creating a variable that is an array to store wrong Guess in
var wrongGuess = [];

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    // Determines which key was pressed and assigns to userGuess.
    var userGuess = event.key;
    console.log("the user pressed this key " +userGuess);



    //Creating an array variable to store positions of correct guess
    var s = [];

    // This code will determine the position of the letters in the computer answer that match the user guess
    for (index = 0; index < charComputerAnswer.length; index++) {
        if (userGuess === charComputerAnswer[index]) {
            hiddenAnswerToDisplay.splice(index, 1, userGuess);
            s.push(index);
            console.log("s in for-if loop is " + s);
            // console.log("s is a type of" + typeof s);
        }
    }
    if (s.length === 0) {
        console.log('s out of the for-if loop' + s);
        wrongGuess.push(userGuess);
        console.log("wrong guess is " + wrongGuess);
        //displaying wrong guesses to DOM isn't working
        // wrongDisplay.innerHTML = wrongGuess;
    }
    console.log("hiddenAnswer to display looks like this outside the for loop " + hiddenAnswerToDisplay);

    // This displays the blanks to the user and replaces comma in an array with a space
    hiddenDisplay.innerHTML = hiddenAnswerToDisplay.join(" ");
    // wrongDisplay.innerHTML = wrongGuess;

}    
    
