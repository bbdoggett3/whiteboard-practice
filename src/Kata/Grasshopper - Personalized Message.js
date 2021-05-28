//#1 PROBLEM: Create a function that gives a personalized greeting. This function takes in two parameters: name, and owner.

//#2 function signature
// function createGreeting(string, string) => string

//#3 DUMMTY DATA

//#4 STEPS
//Same as the problem above

//FUNCTION DECLARATION
function greet(name, owner) {
    if (name === owner) {
        return "Hello boss";
    } else return "Hello guest"
}

//ARROW FUNCTION
let greet = (name, owner) => name === owner ? "Hello boss" : "Hello guest";