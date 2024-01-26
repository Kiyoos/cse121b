const buttonElement = document.getElementById('submitButton');

function copyInput(event) {
  console.log(event);
  const inputElement = document.getElementById('inputBox');
  const outputElement = document.getElementById('output');
  outputElement.innerHTML = inputElement.value;
}
buttonElement.addEventListener('click', copyInput);

const log = document.querySelector('#log');

document.addEventListener('keydown', logKey);

function logKey(e) {
  // how do we know which key was pressed?
  console.log(e.keyCode);
  // checkout e.code, e.key, and e.keyCode
  // what is the difference?
  // e.code = Tells which key was hit and ignores the state Z and z are both KeyZ
  // e.key = Tells the name of the key shows Z or z
}
