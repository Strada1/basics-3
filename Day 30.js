//! Замыкание - это функция, которая имеет доступ к внешнему окружению

let count = 0;

function logCount() {
  let localCount = 1;
  console.log(count); // Внешняя переменная
  console.log(localCount); // Локальная переменная
}

logCount(); // 1 // 0

// Функция logCount является замыканием с доступом к внешней переменной count

let numberOne = 0;

function logOne() {
  let numberOne = 1;
  console.log(numberOne); // 0 или 1? Будет 1. 
}

logOne();

let numberTwo = 0;

function logTwo() {
	console.log(numberTwo); //! Переменная берется из замыкания
}

logTwo(); // 0

let numberThree = 0;

function logThree() {
	console.log(numberThree);
}

numberThree = 10;

logThree(); //! Значение внешней переменной берется в момент выполнения функции

let numberFour = 0;

function incrementCount() {
	numberFour++; // переменная count доступна из замыкания
}

incrementCount();
incrementCount();
console.log(numberFour) // 2
