function calc(operation, a, b) {
  switch (operation) {
    case 'add':
      return a + b;

    case 'multi':
      return a * b;

    case 'subtract':
      return a - b;
  }
}

console.log(calc('add', 100, 22));
console.log(calc('multi', 100, 22));
console.log(calc('subtract', 100, 22));