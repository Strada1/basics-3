'use strict';

const numArray = [1, 11, -2, 3, -10, 4];
const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];

// Task one
const uniqueAnimal = animals.find((animal) => animal.length > 7);
console.log(uniqueAnimal); // elephant

// Task two
const negativeNumArray = numArray.filter((num) => num < 0);
console.log(negativeNumArray); // [ -2, -10 ]

// Task three
const absoluteNumArray = numArray.map((num) => Math.abs(num));
console.log(absoluteNumArray); // [ 1, 11, 2, 3, 10, 4 ]

// Task four
const sortedArr = numArray.sort((a, b) => b- a);
console.log(sortedArr); // [ 11, 4, 3, 1, -2, -10 ]
