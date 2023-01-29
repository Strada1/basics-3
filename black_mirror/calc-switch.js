function calc(operation, a, b) {
  const isNotValid = typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b);

  if (isNotValid) {
    return "is not number";
  }

  switch (operation) {
    case 'add':
      return a + b;

    case 'multi':
      return a * b;

    case 'subtract':
      return a - b;

    default:
      return 'is not operation';
  }
}

console.log(calc('add', 100, 22)); //122
console.log(calc('multi', 100, 22)); //2200
console.log(calc('subtract', 100, 22)); //78

console.log(calc('sub', 100, 22)); //is not operation
console.log(calc('sub', 'h', 22)); //is not number