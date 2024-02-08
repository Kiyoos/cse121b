// 🔍 Part 1 error
let userName = 'Moroni'; // changed from "const" to "let" which allows the variable to change
console.log(`Username: ${userName}`);
userName = 'Moronihah';
console.log(`Username: ${userName}`);

// 🔍 Part 2 error
const currentDateAndTime = new Date(); // function from w3schools.com
console.log(`It is now ${currentDateAndTime}`);

/* 🔍 Part 3 error. The following statement calls a function named total that accepts 
any number of arguments and returns the sum. The returned value is stored in a variable 
named theTotal. 1-10 are the arguments.*/

let theTotal = total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(`The total is ${theTotal}`);

// 'total' function declaration
function total(...theNumbers) {
  // "..." above allows a function to treat an indefinite number of arguments as an array - w3schools
  let sum = 0;
  for (let aNumber of theNumbers) {
    sum += Number(aNumber); // Why do we use * 1? It implicitly converts a string to a number.
    // I changed the above from * 1 to Number(). This is clearer and does not need a comment to say what it is doing.
  }
  return sum;
}
