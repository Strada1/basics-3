//! forEach() - пройтись по всем элементам и выполнить для каждого из них функцию
const users = ['Ivan', 'Petr', 'Anna'];

users.forEach((user) => {
  console.log(user);
});

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// Вывод всех элементов массива
numbers.forEach((number) => {
  // Аргумент - стрелочная функция number, каждый раз это i-й элемент
  console.log(`Number is ${number}`);
});

//! find() - поиск первого элемента, удовлетворяющий условию, переданному функцией
const dates = [2000, 2005, 2004, 1999, 1890, 1044, 1921];
const twentyCentury = dates.find((date) => date < 2000 && date > 1899);
console.log(twentyCentury); // 1999 - первый элемент, который подходит под условие

// Как искать по объекту с помощью find?
const usernames = [
  { name: 'Ivan', age: 18 },
  { name: 'Petr', age: 22 },
  { name: 'Anna', age: 20 },
];
const user = usernames.find((user) => user.name === 'Petr');
console.log(user); // { name: 'Peter', age: 22 }

//! findIndex(), indexOf() - вернуть индекс по условию / найти индекс первого вхождения элемента
const myNums = [1, 2, 4, -2, 4, 12];
const firstNegativeNumber = myNums.findIndex((number) => number < 0);
console.log(firstNegativeNumber); // 3, т.к. -2 имеет индекс === 3

const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
const lionIndex = animals.indexOf('lion');
console.log(lionIndex); // 4, т.к. индекс lion === 4

//! includes() - вернуть true/false, если есть/нет элемента в массиве
const things = ['Ручка', 'Тетрадка', 'Лампа'];
console.log(things.includes('Ручка')); // true, 'Ручка' есть в массиве
console.log(things.includes('Блокнот')); // false, 'Блокнот' нету в массиве

// Задача - вывести первое слово длинее 7 символов
const pets = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
console.log(pets.find((pet) => pet.length > 7)); // elephant, т.к. 8 символов

//! filter() - фильтрация элементов массива по условию. Вернет массив
// Для фильтрации массива
const longWords = pets.filter((pet) => pet.length > 4);
console.log(longWords); // [ 'elephant', 'tiger' ] - длина > 4

// Для фильтрации объекта
const donaters = [
  { name: 'Serg', count: 1000 },
  { name: 'Anna', count: 5000 },
  { name: 'Maria', count: 2000 },
];

// Найдем топовых донатеров с донатом > 3500
const topDonaters = donaters.filter((donation) => donation.count > 3500);
console.log(topDonaters);

//! Задача - создать массив из отрицательных чисел и вывести его for..of в консоль
const data = [1, 11, -2, 3, -10, 4];
const negativies = data.filter((number) => number < 0);
for (const number of negativies) {
  console.log(number); // -2 \n -10
}

//! Задача - создать массив из чисел > 2 и вывести его for..of в консоль
const biggerThenTwo = data.filter((number) => number > 2);
for (const number of biggerThenTwo) {
  console.log(number); // 11 \n 3 \n 4
}

//! map() - примет аргументом функцию и применит ее к каждому элементу массива, вернут массив
// Вернуть массив из имен с заглавным регистром
const names = ['Саша', 'Вася', 'Толя', 'Маша', 'Жора'];
const upperNames = names.map((name) => name.toUpperCase());
for (const name of upperNames) {
  console.log(name); // вывод всех имен в заглавном регистре
}

// Конвертировать свойства объекта в массив
// Создать массив из имен в объекте
const nicknames = [
  { name: 'Ivan', age: 18 },
  { name: 'Petr', age: 25 },
  { name: 'Anna', age: 20 },
];

const userNicknames = nicknames.map((user) => user.name); // аргумент user - i-й элемент массива
console.log(userNicknames); // [ 'Ivan', 'Petr', 'Anna' ]

//! Задача - вернуть массив чисел с абсолютными значениями (с модулями)
const nums = [1, 11, -2, 3, -10, 4];
// Math.abs() - вернуть модуль числа
const abs = nums.map((num) => Math.abs(num)); // аргумент num - i-й элемент массива
console.log(abs); // [ 1, 11, 2, 3, 10, 4 ]

//! sort() - изменит исходный массив, если вызвать arr.sort()
const myNumbers = [1, 11, -2, 3, -10, 4];
const sortedMyNums = myNumbers.sort((a, b) => a - b); // Отсортировать по возрастанию
console.log(sortedMyNums); // [ -10, -2, 1, 3, 4, 11 ]

const sortedDonates = donaters.sort(
  (donation1, donation2) => donation1.count - donation2.count
);
console.log(sortedDonates); // Отсортированы по возрастанию доната

//! Задача - отсортировать по убыванию
const sorted = myNumbers.sort((a, b) => b - a);
console.log(sorted); // Отсортированны по убыванию

//! Array.isArray(), reverse(), split(), join(), concat()
// arr.concat() - соединить с arr массивы внутри и выдать новый массив
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const arrSum = arr1.concat(arr2, arr3);
console.log(arrSum); // 1, 2, 3, 4, 5, 6, 7, 8, 9

// string.split() - вернуть массив по разделителю-аргументу
const string = 'Мать-отец-сын-дочь';
const family = string.split('-'); // Поделить, основываясь на тире
console.log(family); // [ 'Мать', 'отец', 'сын', 'дочь' ]

// arr.join() - вернуть строку с разделителем-аргументом
const changedFamily = family.join(' и ');
console.log(changedFamily); // Мать и отец и сын и дочь

// arr.reverse() - вернуть обратный массив, ничего не принимает
const words = ['Pen', 'Glass', 'Study']
const reversedWords = words.reverse();
console.log(reversedWords); // [ 'Study', 'Glass', 'Pen' ] - обратный массив

// Array.isArray() - true вернет, если это массив
console.log(Array.isArray(words)); // true
console.log(Array.isArray(changedFamily)); // false