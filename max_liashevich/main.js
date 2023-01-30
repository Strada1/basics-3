"use strict";

// --------SIMPLE__CALC__WITH__SWITCH-----------

function calc(a, b, operation) {
  switch (operation) {
    case '+':
      console.log(a + b);
      break;
    case '-':
      console.log(a - b);
      break;
    case '*':
      console.log(a * b);
      break;
    default:
      break;
  }
}

calc(8, 5, '*')


// -------------SIMPLE__CALC__WITH__SWITCH__AND__PROMPT-----------------
const operations = {
  sum: '+',
  min: '-',
  umn: '*',
  div: '/'
};

const firstNum = +prompt(`Enter first digit, please...`, ``);
const secNum = +prompt(`Enter second digit, please...`,``)
const operation = prompt(`What you wanna do with this?(+, -, *, /)`,``);

let result;

if(operation === operations.div && secNum === 0) {
  alert(`division on zero??)) lol!`)
} else {
  switch (operation) {
    case operations.sum:
      result = (firstNum + secNum);
      break;
    case operations.min:
      result = (firstNum - secNum);
      break;
    case operations.umn:
      result = (firstNum * secNum);
      break;
    case operations.div:
      result = (firstNum / secNum);
      break;
    default:
      alert('wtf?');
  }
}

alert(result);
const review = prompt('do you like it?', ``);
if(review === 'yes') {
  alert('Thank you so much, dear friend!');
} else {
  alert('Okay...and fuck you!');
}

// ----------fruit__choice__and__price__with__switch__and__prompt------------------

const expr = prompt(`What kind of fruit you wanna?`,``);

switch (expr) {
  case "Oranges":
    alert("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    alert("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    alert("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    alert("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    alert("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    alert("Sorry, we are out of " + expr + ".");
}

prompt("Is there anything else you'd like?",``);

// #15 Циклы

let i = 3;

while (i) {
  console.log( i-- );
}

let i = 0;
while (i++ < 5) console.log( i );

for (let i = 0; i < 5; ++i) console.log( i );

// При помощи цикла for выведите чётные числа от 2 до 10.
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// Перепишите код, заменив цикл for на while, без изменения поведения цикла.
for (let i = 0; i < 3; i++) {
  console.log( `number ${i}!` );
}
//Решение 
let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

// РЕШЕНИЕ:
let ask;
do {
  ask = prompt(`Hello! Enter number more than hunnid, please...`, `0`);
} while (ask <= 100 && ask);


// РЕШЕНИЕ:

let startNum;
let endNum;
let currentNum;
let i;

startNum = +prompt('Введите число с которого хотите начать поиск простых чисел:', '');
endNum = +prompt('Введите последнее число:', '');

next:
for (currentNum = startNum; currentNum <= endNum; currentNum++) {

  for (i = 2; i <= Math.pow(currentNum, 1 / 2); i++) {
  if (currentNum % i == 0) {
continue next;
}
}
alert(currentNum);
}