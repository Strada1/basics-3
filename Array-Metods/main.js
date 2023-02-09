let number = [1, 3, 4, 7, 9, 10]
number.forEach((name) => {
  console.log(`Number is ${name}`)
})

const num = [1, 5, -29, -345, 23, -345]
const result = num.find((number) => number < 0)
console.log(result)

const numba = [1, 5, -29, -345, 23]
const results = num.findIndex((number) => number < 0)
console.log(results, numba[results])

const person = [
  { name: 'Nikita', age: 23 },
  { name: 'Slava', age: 21 },
  { name: 'Mihas', age: 25 },
  { name: 'MyName', age: 24 },
]
console.log(person.find((person) => person.name === 'Mihas'))
console.log(num.indexOf(-345, 3))

const animals = ['cat', 'Hot-Dog', 'elephant', 'tiger', 'lion']
const word = animals.findIndex((word) => word.length >= 7)
console.log(animals[word])

const resultes = person.filter((user) => user.age >= 24)
console.log(resultes)
console.log(person)

const arrayNumbers = [1, 11, -2, 3, -10, 4]

const unPositivesNumbers = arrayNumbers.filter((number) => number < 0)
console.log(unPositivesNumbers)

const upperAnimal = animals.map((animals) => animals.toUpperCase())
console.log(upperAnimal)
const lowerAnimals = upperAnimal.map((animals) => animals.toLowerCase())
console.log(lowerAnimals)

const userName = person.map((user) => `${user.name} ${user.age}`)
console.log(userName)

const positiveNumbers = arrayNumbers.filter((value) => value >= 0)
console.log(positiveNumbers)

console.log(arrayNumbers.sort((a, b) => a - b))
console.log(arrayNumbers.sort((a, b) => b - a))

console.log(person.sort((age1, age2) => age2.age - age1.age))

const an = num.concat(arrayNumbers, unPositivesNumbers)
console.log(an)

let string = 'I,go,to,shop'
let er = string.split(',')
console.log(er)

console.log(er.join(' and '))
console.log(Array.isArray(string))
console.log(Array.isArray(er))
console.log(er.reverse())
