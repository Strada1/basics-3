function calc(a, b, operation) {
  switch (operation) {
    case '+':
      console.log(a + b);
      break;
    case '-':
      console.log(a - b);
      break;
    case '*':
      console.log(a * b);
      break;
    default:
      break;
  }
}

calc(8, 5, '*')

