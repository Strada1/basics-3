"use strict";

//FOR EACH 
const arr = [1,2,3,4,5,6,7];

arr.forEach(function (number, i, arr) {
  console.log(` Number is ${number}`);
})

//FIND 

const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];

const arr1 = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
console.log(arr1.find(item => item.length > 7));

//FILTER
const Arr = [1, 11, -2, 3, -10, 4];
let newArr = Arr.filter(item => item < 0);
console.log(newArr);

//MAP 
const moreArr = [1, 11, -2, 3, -10, 4];
let absArr = moreArr.map( num∑ber => Math.abs(number));
console.log(absArr);

//SORT 
const digits = [1, 11, -2, 3, -10, 4];
digits.sort(compareNum);
console.log(digits);

function compareNum(a, b) {
  return a - b;
}
