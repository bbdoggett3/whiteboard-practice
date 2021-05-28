//Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

function sum(str1, str2) {
    if(str1 === "") {
      str1 = 0;
    }
    if(str2 === "") {
      str2 = 0;
    }
      let num1 = parseInt(str1, 10);
      let num2 = parseInt(str2, 10)
  
  
      let total = num1 + num2
      let strTotal = total.toString();
  
      return strTotal;
  
  }