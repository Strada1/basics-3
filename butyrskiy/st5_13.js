function calc(operation, a, b) {
  if(typeof(a) !== 'number' || typeof(b) !== 'number') {
    return 'Enter number!';
  } 
    else if(operation !== 'add' && operation !== 'multi' && operation !== 'subtract') {
    return 'Invalid operation';
  }
  
  switch(operation) {
    case 'add':
      return a + b;
    case 'multi':
      return a * b;
    case 'subtract':
      return a - b;
    default:
      return 'Что-то сломалось';
  }
}

console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('subtract', 3, 2));