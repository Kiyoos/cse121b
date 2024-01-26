let firstName = 'Antonia';
let lastName = 'Francesca';

// function declaration
// function fullName(first, last) {
//   return `${first} ${last}`;
// }

// function expression
// const fullName = function (first, last) {
//   return `${first} ${last}`;
// };

// arrow function
const fullName = (first, last) => `${first} ${last}`;

// calling a function
document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);

// Arrays
let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];

// filter stats with B
let namesB = names.filter((name) => name.charAt(0) == 'B');
console.log(namesB);

let namesLength = names.map((name) => name.length);
console.log(namesLength);

let namesAvg =
  names.reduce((total, name) => total + name.length, 0) / names.length;
console.log(namesAvg);
