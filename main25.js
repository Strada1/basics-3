list = ['1', '2', '3', '4', '5', '6', '7'];
const mas = [1,2,3,4,5];
mas.forEach(number => {
console.log(`Number is ${number}`);
})


const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
const animal = animals.find(function(el) {
return el.length > 5 && el.length < 9
});
console.log(animal);

const numbers = [1, 11, -2, 3, -10, 4];
const negativeValuesIndex = numbers.filter(number => number < 0);
console.log(negativeValuesIndex); 
