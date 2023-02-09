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


//ОБЛЕГЧЕННЫЙ СИНТАКСИС ДЛЯ WHILE
let num = -1;
while (num) console.log(num++); 

//ВЫВОД В КОНСОЛЬ ЧИСЕЛ ОТ 0 ДО 5 ВСЕМИ ВИДАМИ ЦИКЛОВ
let j = 1;
while(j <= 5) {
  console.log(j++);
}
// homework
let j = 1;
while(j <= 5) console.log(j++);

let j = 1;
do {
  console.log(j++);
} while (j <= 5);

for( let j = 1; j <= 5; j++) {
  console.log(j);
}

for( let j = 1; j <= 5; j++) {
  if(j % 2 == 0) continue;
  console.log(j);
}

for(let num = 0; num < 2; num++) {
  for(let size = 0; size < 3; size++) {
  }
  if (num == 2) break;
  console.log(num);
}

//OBJECTS

let userInfo = {
  name: "Max",
  age: 30,
  showInfo() {
    console.log(`${this.name}`)
  }
}
let user = userInfo;
userInfo = null;
userInfo.showInfo();

console.log(userInfo.age);

//FOR IN___IN OBJECTS
let userInfo = {
  name: "Max",
  age: 30,
}
for (const key in userInfo) {
  const value = userInfo[key];
  console.log(value);
}

let userInfo = {
  name: "Max",
  age: 30,
  adress: {
    city:"Uzhgorod"
  }
}
for(const key in userInfo.adress) {
  console.log(userInfo.adress[key]);
}

///CHANGE ELEMENT IN OBJECT AND THEN DELETE THIS SHIT FROM THERE
let userInfo = {
  name: "Max",
  age: 30,
}
userInfo.name = "Lena";
console.log(userInfo.name)
delete userInfo.name
for(const key in userInfo) {
  console.log(userInfo[key]);
}

// CHECK OBJ AND RETURN TRUE OR FALSE
function isEmpty(obj) {
  for(let key in obj) {
    return alert(false);
  }
  return alert(true);
}
let userName = {
}


isEmpty(userName);

// SUM ALL KEYS OF OBJ
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum); 

// MULTIPLY ALL KEYS IN OBJ
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
}

function multipltNumeric(obj) {
  for(let key in obj) {
    if(typeof obj[key] == 'number'){
      obj[key] *= 2;
    }
    console.log(obj[key])
  }
}
multipltNumeric(menu);

//OBJECTS MORE
const contacts = {
  list: {
    "Max" : 123412424,
    "Tati": 539934834,
    "Pedro": 53959358
  },
  add(name, number) {
    this.list[name] = number;
  },
  delete(name) {
    delete this.list[name];
  }
};

contacts.add("Sanchez", 4024242424);
contacts.delete("Max");
console.log(contacts);
// OBJ PRACTICE:
const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  }
};

// for(let key in options) {
//   if(typeof(options[key]) === 'object') {
//     for(let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//   }
// }
// COUNTER IN OBJ(bad method, cause it's too long, too many)
let counter = 0;
for(let key in options) {
  if(typeof(options[key]) === 'object') {
    for(let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
      counter++;
    }
  } else {
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
    counter++;
  }
}
console.log(counter);
// METHODS IN OBJ
const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function () {
    console.log("Test");
  }
};
options.makeTest(); //CREATE MY OWN METHOD IN OBJECT
console.log(Object.keys(options));
console.log(Object.keys(options).length);
// DESTRUCT OBJECT:

const {border, bg} = options.colors;// ДЕСТРУКТУРИЗАЦИЯ ОБЬЕКТА
console.log(border);
