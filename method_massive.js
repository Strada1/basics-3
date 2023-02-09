let numbers = [1, 2, 3, 4, 5]
numbers.forEach((name) => {
    console.log(`Number is ${name}`)
});

let animals = ['cat', 'dog', 'elephant', 'tiger', 'lion']
let word = animals.findIndex((word) => word.length >= 7)
console.log(animals[word]);

let mass = [1, 11, -2, 3, -10, 4]
let minusNumbers = mass.filter((number) => number <0)
console.log(minusNumbers);

let plusNumbers = mass.filter((value) => value >= 0)
console.log(plusNumbers);

let sortedNumbers = mass.sort((a, b) => a-b);
console.log(sortedNumbers);