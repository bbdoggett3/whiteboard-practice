//FOLLOW THESE STEPS WHEN WORKING THROUGH A PROBLEM

//CLARIFY THE PROBLEM
//The function should return true if the player's health is greater than 0 or false if it is 0 or below.
//health which will always be a whole number between -10 and 10. 

//FUNCTION SIGNATURE
//function(int)=> bool

//DUMMY DATA
//function checkAlive(10) => true
//function checkAlive(1) => true
//function checkAlive(0) => false

//PSEDUO CODE
// step 1: create an if statement to check and see if health is less than or equal to 0
// step 2: if above if is true return false.
// step 3: create else statement that just returns true for everyone other condition.


function checkAlive (health) {
    if (health <= 0) {
      return false
    } else {
      return true
    }
  }

  //PASSED
  //Simple Kata to understand the basic setup of a problem. This can help you tackle a majority of problems.