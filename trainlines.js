
//setting up async/await ask functionality for the command line
const readline = require("readline");
const readlineInterface = readline.createInterface(
    process.stdin,
    process.stdout
);

function ask(questionText) {
    return new Promise((resolve, reject) => {
        readlineInterface.question(questionText, resolve);
    });
}

// create the Line class
class Line {
    //utilizing the constructor method and passing in our arguments to construct
    constructor(name, connections) {
        //mapping the 'this' keyword to the arguments passed in the constructor

    }

    //creating a map method on our Line class objects
    map() {
        //inform the user where they are and where they can connect to.
    }
}

//defining the line our user starts on


//create new object of the Line class - "Blue"
let Blue = new Line(
    //create connections key-value pair of the new object

    //create connections key-value pair of the new object

)

//create new object of the Line class - "Green"

//create new object of the Line class - "Yellow"

//create new object of the Line class - "Red"

//create new object of the Line class - "Purple"


//create lookup table to map the line keyword to the object
let lineLookUp = {

}

//create state machine to hold allowable transitions 
let lineStateMachine = {

}


//create function that holds our intro text which tells the user their command options
function rideBegin() {
    //console log that greets user and informs them of their command options

    //call the function that holds our input functionality

}

//create function who solely exists to deal with user input
async function riding() {
    //assign result of await ask to a variable for use


    //split the input on a space


    //let action be the first word in input


    //let target be the second word in input


    //capitalize the first letter in target


    //if action is "map" and there is no target

    //look up the current line in the lookup table and call the map method on it

    //if action is "relax" and there is no target

    //console log the exit message

    //exit the program

    //if action is "transfer" and there is a target

    //if  the value of currentLine in the state machine includes the action target

    //set the current line to the target

    //inform the user of the change in current line
    
    //call our riding function to continue getting input

    //if the value of currentLine in the state machine does NOT include the action target

    //inform user that they can't transfer lines

    //call our riding function to continue getting input


}


//if the input does not match any of the available options

//let the user know their input is incorrect

//call the input loop

//call the input loop recursively so it always prompts the user to continue

//call the intro function
rideBegin()
