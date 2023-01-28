function calc(operation, a, b) {
  switch(operation) {
    case 'add':
    case 'plus':
      return a + b;
      break;
    case 'multi':
      return a * b;
      break;
    case 'subtract':
    case 'minus':
      return a - b;
      break;
    default:
      return 'Unknown operation';
  }
}
calc('minus', 4, 4)