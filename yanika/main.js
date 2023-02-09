const numbers = [1, 11, -2, 3, -10, 4];
const negativeNumbers = numbers.filter(numbers => numbers < 0);
console.log(negativeNumbers);

const absolutNum = numbers.map(absolutNum => Math.abs(absolutNum));
console.log(absolutNum);

const sortedNumbers = numbers.sort((a, b) => b - a);
console.log(sortedNumbers);
