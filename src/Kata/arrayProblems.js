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
