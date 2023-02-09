const randomNumbers = [1, 2, 3, 4];
randomNumbers.forEach(integerNumber => console.log(`Number is ${integerNumber}`));


const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
const animalsFind = animals.find(beast => beast.length > 7);
console.log(animalsFind);


const numbers = [1, 11, -2, 3, -10, 4]
const allNegativeNumbers = numbers.filter(number => number < 0);
const allPositiveNumbers = numbers.map(number => Math.abs(number));
const sortedNumbers = numbers.sort((a, b) => b - a);

console.log(allNegativeNumbers);
console.log(allPositiveNumbers);
console.log(sortedNumbers);


