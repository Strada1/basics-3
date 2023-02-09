"use strict";

const arr = [1,2,3,6,7];
arr[99] = 0;
console.log(arr.length);//свойство length - состоит из последнего индекса + 1;
arr.push(10);

// console.log(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

 //for of 
for (let value of arr ) {
  console.log(value);
}


//FOR EACH 
const arr = [1,2,3,6,7];

arr.forEach(function (item, i, arr) {
  console.log(`${i}: ${item} in array ${arr}`);
})


//Формирование массива на основании строк(.split()):
const str = prompt(``,``);
const products = str.split(', ');
console.log(products);

Обьединение элементов массива(.join()):
const str = prompt(``,``);
const products = str.split(', ');
console.log(products.join('; '));// Склеиваем в строку через ;

//Метод cортировки массива(.sort()):
const str = prompt(``,``);
const products = str.split(', ');
products.sort();//сортирует строки по алфавиту
console.log(products.join('; '));// Склеиваем в строку через ;

//Метод cортировки массива(.sort()).Сортировка чисел с помощью алгоритма:
const arr = [42,193,26,8,10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
  return a -b;
}

//Псевдомассивы




