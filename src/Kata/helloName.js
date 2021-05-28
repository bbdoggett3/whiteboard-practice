//CLARIFY THE PROBLEM
//Returns "Hello, {Name}!" or if no name is passed in then it returns "Hello, World!"

function hello(name) {
  
    if(name) {
    let firstLetter = name.charAt(0).toUpperCase();
    let noFirstLetter = name.slice(1).toLowerCase();
      
      return `Hello, ${firstLetter}${noFirstLetter}!`
    } else {
      return `Hello, World!`
    }
  }

  console.log(hello("Ben"))

  //PASSED