
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
        this.name = name;
        this.connections = connections;
    }

    //creating a map method on our Line class objects
    map() {

        console.log(`From the ${this.name} line, you can connect to the ${this.connections} line(s).`)
    }
}


//defining the line our user starts on
let currentLine = "blue"

//create new object of the Line class - "Blue"
let Blue = new Line(
    //create connections key-value pair of the new object
    "Blue",
    //create connections key-value pair of the new object
    "Green, Yellow"
)

//create new object of the Line class - "Green"
let Green = new Line(
    "Green",
    "Blue, Red"
)

//create new object of the Line class - "Yellow"
let Yellow = new Line(
    "Yellow",
    "Blue, Purple"
)

//create new object of the Line class - "Red"
let Red = new Line(
    "Red",
    "Green"
)

//create new object of the Line class - "Purple"
let Purple = new Line(
    "Purple",
    "Yellow"
)

//create lookup table to map the line keyword to the object
let lineLookUp = {
    blue: Blue,
    green: Green,
    yellow: Yellow,
    red: Red,
    purple: Purple

}

//create state machine to hold allowable transitions 
let lineStateMachine = {
    blue: ["Green", "Yellow"],
    green: ["Blue", "Red"],
    yellow: ["Blue", "Purple"],
    red: ["Green"],
    purple: ["Yellow"]
}

//create function that holds our intro text which tells the user their command options
function rideBegin() {
    //console log that greets user and informs them of their command options
    console.log("The conductor has taken your ticket and you are riding on the train. You can check the [map] or [transfer] lines. Or, you can [relax].")
    //call the function that holds our input functionality
    riding()
}

//create function who solely exists to deal with user input
async function riding() {
    //assign result of await ask to a variable for use
    let input = await ask("What shall you do?  >_")

    //split the input on a space
    input = input.split(" ");

    //let action be the first word in input
    let action = input[0];

    //let target be the second word in input
    let target = input.slice(1).join(" ");

    //capitalize the first letter in target
    target = target.charAt(0).toUpperCase() + target.slice(1)

    //if action is "map" and there is no target
    if (action === "map" && !target) {
        //look up the current line in the lookup table and call the map method on it
        lineLookUp[currentLine].map()
    }

    //if action is "relax" and there is no target
    if (action === "relax" && !target) {
        //console log the exit message
        console.log("You settle into your seat and wait for your destination.")
        //exit the program
        process.exit()
    }

    //if action is "transfer" and there is a target
    if (action === "transfer" && target) {
        //if  the value of currentLine in the state machine includes the action target
        if (lineStateMachine[currentLine].includes(target)) {
            //set the current line to the target
            currentLine = target.toLowerCase()
            //inform the user of the change in current line
            console.log(`You transferred to the ${target} line.`)
            //call our riding function to continue getting input
            riding()
            //if the value of currentLine in the state machine does NOT include the action target
        } else {
            //inform user that they can't transfer lines
            console.log("You can't transfer there from here.")
            //call our riding function to continue getting input
            riding()
        }
    }


    //if the input does not match any of the available options
    if (action !== "map" && action !== "transfer" && action !== "relax") {
        //let the user know their input is incorrect
        console.log("What are you trying to do?")
        //call the input loop
        riding()
    }

    //call the input loop recursively so it always prompts the user to continue
    riding()
}

//call the intro function
rideBegin()
