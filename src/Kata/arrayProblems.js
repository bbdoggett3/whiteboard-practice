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

//TIME TO CODE - YOU GOT THIS BRO!
let arr = [0, 23, 14, 12, 9];

function orderArray(array) {
//   Optional. A function that defines an alternative sort order. The function should return a negative, zero, or positive value, depending on the arguments, like:
// function(a, b){return a-b}
// When the sort() method compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
    let newArr = array.sort(function(a, b){return a-b});
    //You can use some syntax sugar here and add an arrow function as an example: arr.sort((a, b) => a-b;)

    return newArr;
}

//PROBLEM: Create a Function that will take in an array and check if the next number in the array is the same as the last. If it is then add it together with all the other numbers that follow that same pattern

//You got this Ben!
let arr = [2,1,4,4,5,5] //ouput should be 9
let arr2 = [4,4,4,5] //output should be 8
let arr3 = [1,3,4,6,7] //output should be 0

function sumRepeatNum(arr) {
  let sum = [];
  let total;
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === arr[i + 1]) {
      sum.push(arr[i]);
      total = sum.reduce(reducer);
    } else return 0;
  }
return total;
}

sumRepeatNum(arr3)

//PROBLEM:
// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.

//CLARIFY
// The given string will never be empty.
// The length of the array is always one less than the length of the string.
// All numbers are valid.
// There can be duplicate letters and numbers.

//FUNCTION SIGNATURE
//function(string, arr) -> int

//DUMMY DATA
// let str = "zbk", arr = [0, 1]
//     str = "bk", arr = [1]
//     str = "b", arr = []
//     return 'b'

//PSEUDO CODE
//step 1: create a function called lastSurvivor that takes in two parameters, one is a string and the other is an array.
//step 2: split the string you pass in to the parameters and make it an array.
//step 3: create a for loop that will parse the array.

let str = "zbk";
let arr =[0,1];

function lastSurvivor(letters, arr) {
  letters = letters.split('');
  for (let i = 0; i < arr.length; i++) {
     letters.splice(arr[i], 1)
  }
  return letters.join('')
}

console.log(lastSurvivor(str, arr))