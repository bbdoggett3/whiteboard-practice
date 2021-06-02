//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

//Examples:

//solution('abc', 'bc') // returns true
//solution('abc', 'd') // returns false

//FUNCTION SIGNATURE
//function(string, string) => string

//NEED TO FINISH KATA
function solution(str, ending) {
    for(let i = 0; i < str.length; i++) {
        if(str.charAt(str.length - 1) === ending) {
            return true
        } else {
            return false
        }
    }
}