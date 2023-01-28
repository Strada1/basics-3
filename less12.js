// function checkAge(age = 18) {
//   return age < 18 ? 'you are not allowed' : 'you are welcome!';}

// function calc(operation = 'add', a = 1, b = 1) {
//   if (operation === 'add') {
//     return a + b;
//   } else if (operation === 'multi') {
//     return a * b;
//   } else if (operation === 'subtract') {
//     return a - b;
//   } else {
//     return 'Нет такой операции!';
//   }
// }

// const permitByAge = checkAge(21);
// const multiResult = calc('multi', 5, 10);
// const addResult = calc('add', 15, 2);
// const subtractResult = calc('subtract', 10, 2);

// console.log(permitByAge); // you are welcome!
// console.log(multiResult); // 50
// console.log(addResult); // 17
// console.log(subtractResult); // 8

function calc(operation = '', a = 1, b = 1) {
  switch(operation) {
    case 'add':
      return a + b;

    case 'multi':
      return a * b;
      
    case 'exponentiation':
      return a**b;

    case 'subtract':
      return a - b;

    case 'division':
    default:
      return 'There is no such operation!';
  }
}

const result = calc('multi', 7, 9);
console.log(result);