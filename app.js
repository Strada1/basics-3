'use strict';

// Task one
const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
const uniqueAnimal = animals.find((animal) => animal.length > 7);
console.log(uniqueAnimal); // elephant

// Task two
const numArray = [1, 11, -2, 3, -10, 4];
const negativeNumArray = numArray.filter((num) => num < 0);
console.log(negativeNumArray); // [ -2, -10 ]
