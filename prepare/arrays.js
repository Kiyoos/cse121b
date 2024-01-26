// Activity 1 - Map
const numArray = ['one', 'two', 'three'];

const numList = numArray.map(function (num) {
  return `<li>${num}</li>`;
});

document.getElementById('myList').innerHTML = numList.join('');

// Activity 2 - Map
const gradeArray = ['A', 'B', 'A'];

function gradePoints(grade) {
  switch (grade) {
    case 'A':
      return 4;
      break;
    case 'B':
      return 3;
      break;
    case 'C':
      return 2;
      break;
    case 'D':
      return 1;
      break;
  }
}

const grades = gradeArray.map(gradePoints);

document.getElementById('myList').innerHTML += `Grades by Points: ${grades.join(
  ', '
)}`;

// Activity 3 - Reduce
const gpaPoints = gradeArray.map(gradePoints);

const gpaPointsTotal = gpaPoints.reduce(function (total, item) {
  return total + item;
});

const gpa = gpaPointsTotal / gpaPoints.length;

document.getElementById('myList').innerHTML += `<br>GPA: ${gpa.toFixed(2)}`;

// Activity 4 - Filter
const food = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const longNames = food.filter(function (item) {
  return item.length > 6;
});

document.getElementById(
  'myList'
).innerHTML += `<br>Food names longer than 6 letters: ${longNames}`;

// Activity 5 = indexOf
const numbers = [12, 34, 21, 54];
const luckNumber = 21;
const luckyIndex = numbers.indexOf(luckNumber);

document.getElementById(
  'myList'
).innerHTML += `<br>Lucky Number is at Index: ${luckyIndex}`;
