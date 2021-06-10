//PROBLEM: Write a program to reverse the array

//CLARIFY: 
// 1-Just take in an array and output the array reversed?
// 2-Is this just taking in one array or any other data types.
// 3- Is there anything in particular that you are looking for

//FUNCTION SIGNATURE
//function(arr) -> revArr 

//DUMMY DATA
//let arr = [1,2,3] -> once the variable arr is passed into the function
// it will return the newArr which will be [3,2,1]

//PSEUDO CODE / WHITEBOARD
//Step 1: I will need to create a function declaration call reverseArr that takes in an array as its parameters.
//Step 2: create a newArr variable and set it equal to an empty array.
//Step 3: Use the built in method reverse() for the arr that is passed in in order to make the array.
//Step 3 OPTIONAL: You can use a for loop in order parse the array by using the .length and the assigning the items in the front of the array to the back of the array 

//TIME TO CODE YOU STUD!
let arr = [1,2,3];

function reverseArr(arr) {
    let newArr = reverse(arr);

    return newArr
}

console.log(reverseArr(arr));

//We can also build out this reverse method ourselves with the following code...
function reverse(arr) {
    let reverse = [];

    for(let i = arr.length - 1; i >= 0; i--) {
        reverse.push(arr[i]);
    }
    return reverse;
}

//PROBLEM Sort the Array in ascending order

//CLARIFY 
//1. Are we only sorting one array in this problem?
//2. Is there any other variables that I should be concerned about? OR conditions?

//FUNCTION SIGNTATURE 
//function(arr) -> NewArr

//DUMMY DATA:
// Input: arr[] = {0, 23, 14, 12, 9}
// Output: {0, 9, 12, 14, 23}

//PSUEDO CODE:
//Step 1: Create a function called orderArray that takes in an array as its parameter(only one parameter will be passed).
//Step 2: Need to create a variable called "NewArr" that will be assigned to a blank array.
//Step 3: We need to create a for loop that will check the acending order of array, and then push those arrays to a new one.
//Step 4: You will then need to return the newArr and console it to the screen.

