function calc(operation, a, b) {
  switch (operation) {
    case 'add':
      return a + b;
      break;
    case 'subtract':
      return a - b;
      break;
    case 'multiply':
      return a * b;
      break;
  }
}

console.log(calc('add', 1, 2));
console.log(calc('subtract', 3, 2));
console.log(calc('multiply', 1, 2));
