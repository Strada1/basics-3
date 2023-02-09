const arr = ['cat', 'dog', 'elephant', 'tiger', 'lion']
console.log(arr.find((elem) => elem.length > 7))


const number = [1, 11, -2, 3, -10, 4]
const negativeNumber = number.filter((elem) => elem < 0)
console.log(negativeNumber)
const absoluteNumber =  number.map((elem) =>Math.abs(elem))
console.log(absoluteNumber)

const sortedNumbers = number.sort((a, b) => a - b);
console.log(sortedNumbers); 


