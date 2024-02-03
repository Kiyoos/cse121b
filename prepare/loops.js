const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

console.log('FOR loop');
for (let i = 0; i < studentReport.length; i++) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
}

console.log('WHILE loop');
let i = 0;
while (i < studentReport.length) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
  i++;
}

console.log('FOREACH loop');
studentReport.forEach(function (item) {
  if (item < LIMIT) {
    console.log(item);
  }
});

console.log('FOR...IN loop');
for (let i in studentReport) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
}

console.log('Next days of the week.');
let weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

for (let i = 1; i <= DAYS; i++) {
  let today = new Date().getDay();
  let futureDay = (i + today) % 7;
  console.log(weekdays[futureDay]);
}
