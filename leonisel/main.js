// function calc(operation, a, b) {
//   return operation == 'add' ? a + b :
//   'multi' ? a * b :
//   'subtract' ? a - b : 'oops';
// }



function calc(operation, a, b) {
  switch(operation) {
  case 'add':
    return a + b;
  case 'multi':
    return a * b;
  case 'subtract':
    return a - b;
  default:
    return 'oooops dude ... something wrong';
  }
}

console.log(calc('add', 3, 2));
      


