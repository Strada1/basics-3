const numbers = [1, 11, -2, 3, -10, 4];
const negativeNumbers = numbers.filter(numbers => numbers < 0);
console.log(negativeNumbers);

const absolutNum = numbers.map(uppNumber => Math.abs(uppNumber));
console.log(absolutNum);
//