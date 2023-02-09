const mas = [1,2,3,4,5];
mas.forEach(number => {
    console.log(`Number is ${number}`);
})

const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
animals.forEach(animal => {
    if (animal.length > 7) {
        console.log(animal);
        return;
    }
})

const numbers = [1, 11, -2, 3, -10, 4];
negativeNumbers = numbers.filter(number => number < 0);
console.log(negativeNumbers);

absoluteNumbers = numbers.map(number => Math.abs(number));
console.log(absoluteNumbers);

const sortedNumbers = numbers.sort((a, b) => b - a)
console.log(sortedNumbers); // [-10, -2, 1, 3, 4, 11]
console.log(numbers);

const ab = numbers.reverse(sortedNumbers)
console.log(ab, numbers);