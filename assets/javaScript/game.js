//Variables that hold references to places in the HTML - this isn't working
var hiddenDisplay = document.getElementById("hidden_answer");
// var userChoiceText = document.getElementById("userchoice_text");

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



// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    // Determines which key was pressed.
    var userGuess = event.key;

    // This code will determine the position of the letters in the computer answer that match the user guess
    // var s = [];
    for (index = 0; index < charComputerAnswer.length; index++) {
        if (userGuess === charComputerAnswer[index]) {
            hiddenAnswerToDisplay.splice(index, 1, userGuess);
        }
    }

    // This displays the blanks to the user and replaces comma in an array with a space
    hiddenDisplay.innerHTML = hiddenAnswerToDisplay.join(" ");
}    
    
