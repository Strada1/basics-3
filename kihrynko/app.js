function calc(operation = '', a = 1, b = 1) {
  switch(operation) {
    case 'add':
      return a + b;

    case 'multi':
      return a * b;

    case 'subtract':
      return a - b;

    case 'division':
    default:
      return 'There is no such operation!';
  }
}

const result = calc('multi', 7, 9);
console.log(result);
