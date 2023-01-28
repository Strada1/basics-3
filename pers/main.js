console.log('Hello World!')

let userName = 'MY NAME'
let userHeight = 170
let userAge = 14
console.log(`${userName} is ${userAge} years old ${userHeight}`)

console.log(1 + 4)
console.log(1 + userName)
console.log(1 - userName)
console.log(1 / userAge)
console.log(userHeight * userAge)
console.log(userName + userName)
const COLOR_ORANGE = '#FF7F00'
let color = COLOR_ORANGE

console.log('1' + 2)
console.log(true + true)
console.log(1 + '2')
console.log(false + false)

// const a = '50a'
// const b = 49
// console.log(a + b)
// console.log(Number(a) - Number(b))

console.log(String(true))
console.log(String(123))
console.log(String('abc'))

typeof undefined
typeof 'str'
typeof false
typeof 456

console.log(5 % 2)
console.log(2 ** 3)

const a = ' str '
const b = 'hello '
let i = a + b
let number = 34
let f = i + number
const n = true
console.log(Number(n) + f + n)

console.log('Куки' > 'котя')
console.log('A' < 'a')
console.log('2' < 45)
console.log(false == true)
const c = Boolean(null)
const be = Boolean('')
console.log(c == be)
console.log('Stop')

if ('12' >= '21') {
  console.log(true)
} else {
  console.log(false)
}

// const numbers = 209
// if (numbers < 32) {
//   return 'Good'
// } else if (numbers > 320) {
//   return 'Gooood'
// } else {
//   return 'Goooooood', numbers == Number
// }

// const age = prompt('How much you years?')
// if (age >= 18) {
//   alert('Hello Old Person')
// } else if (age >= 12) {
//   alert('Hello Tenager')
// } else {
//   alert(' Hello Child')
// }

const chekAge = (age) => {
  if (age >= 18) {
    console.log('You Welcome!')
  } else {
    console.log('You are not allowed')
  }
}
chekAge(19)

const calc = (opperation, a, b) => {
  if (opperation == '+') {
    return a + b
  } else if (opperation == '-') {
    return a - b
  } else if (opperation == '/') {
    return a / b
  } else if (opperation == '*') {
    return a * b
  } else {
    console.log('This not opperation')
  }
}
console.log(calc('/', 34, 4.7689))
