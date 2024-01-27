/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  let addNumber1 = Number(document.getElementById('add1').value);
  let addNumber2 = Number(document.getElementById('add2').value);
  let sumElement = document.getElementById('sum');
  return (sumElement.value = add(addNumber1, addNumber2));
}

document.getElementById('addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (subtract1, subtract2) {
  return subtract1 - subtract2;
};

const subtractNumbers = function () {
  let subtractNum1 = Number(document.getElementById('subtract1').value);
  let subtractNum2 = Number(document.getElementById('subtract2').value);
  let subtractElement = document.getElementById('difference');
  return (subtractElement.value = subtract(subtractNum1, subtractNum2));
};

document
  .getElementById('subtractNumbers')
  .addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1 * factor2;

const multiplyNumbers = () => {
  let factorNum1 = Number(document.getElementById('factor1').value);
  let factorNum2 = Number(document.getElementById('factor2').value);
  let multiplyElement = document.getElementById('product');
  return (multiplyElement.value = multiply(factorNum1, factorNum2));
};

document
  .getElementById('multiplyNumbers')
  .addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (dividend, divisor) => dividend / divisor;

function divideNumbers() {
  let dividendNum = Number(document.getElementById('dividend').value);
  let divisorNum = Number(document.getElementById('divisor').value);
  let divideElement = document.getElementById('quotient');
  return (divideElement.value = divide(dividendNum, divisorNum));
}

document
  .getElementById('divideNumbers')
  .addEventListener('click', divideNumbers);

/* Decision Structure */
let member = document.getElementById('member');
let discount = 0.8;
const isChecked = (input) => {
  return member.checked ? input * discount : input;
};

member.addEventListener('change', isChecked);

function totalDue() {
  let subTotal = Number(document.getElementById('subtotal').value);
  let total = isChecked(subTotal);
  let totalElement = document.getElementById('total');
  return (totalElement.innerHTML = `$ ${total.toFixed(2)}`);
}

document.getElementById('getTotal').addEventListener('click', totalDue);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById('array').innerHTML = numbers.join(', ');

/* Output Odds Only Array */
const odds = numbers.filter((number) => number % 2 == 1);
document.getElementById('odds').innerHTML = odds.join(', ');

/* Output Evens Only Array */
const evens = numbers.filter((number) => number % 2 == 0);
document.getElementById('evens').innerHTML = evens.join(', ');

/* Output Sum of Org. Array */
const sumArray = numbers.reduce((sum, number) => sum + number);
document.getElementById('sumOfArray').innerHTML = sumArray;

/* Output Multiplied by 2 Array */
const multpliedArray = numbers.map((number) => number * 2);
document.getElementById('multiplied').innerHTML = multpliedArray.join(', ');

/* Output Sum of Multiplied by 2 Array */
const sumMultipliedArray = numbers
  .map((number) => number * 2)
  .reduce((sum, number) => sum + number);
document.getElementById('sumOfMultiplied').innerHTML = sumMultipliedArray;
