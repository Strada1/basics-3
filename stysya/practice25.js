let arr =[1, 4, 5, 6, 7, 8, 9];
arr.forEach((number) => {
    console.log("Number is " + number);
})

let animal = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
const lengthWord =  animal.find(word => word.length > 7);
console.log(lengthWord);

let arr2 = [1, 11, -2, 3, -10, 4];
const arrNegative = arr2.filter( number => number < 0);
console.log(arrNegative);

let arr3 = [1, 11, -2, 3, -10, 4];
const absArr = arr3.filter(number => number > 0);
console.log (absArr);

let array = [1, 11, -2, 3, -10, 4];
let numberSort = array.sort((a, b) => b - a );
console.log(numberSort);
