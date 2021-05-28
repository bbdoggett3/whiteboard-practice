// #1 What is the problem?
//Write function removeExclamationMarks which removes all exclamation marks from a given string.

//#2 Function signature
// function removeExclamationMarks(string) => newString

//#3 Dummy Data 
// removeExclamationMarks("Hello World!!!") => "Hello World"

//#4 Step 1: create a function called removeExclamationMarks that takes in a string as a paramater
    //Step 2: You will need to loop through the string and check if it has any '!' in the string. If it doesn remove them.
    
function removeExclamationMarks(s) {
    let newString = s;

    while (newString[newString.length - 1] === "!") {
        newString = newString.slice(0, -1);
    }

    return newString;
}



