function calc(a, b, operation) {
  let result;
  switch(operation) {
    case 'add':
     result = a + b;
     break;
    case 'multi':
      result = a * b;
      break;
    case 'subtract':
      result = a - b;
      break;    
  }
  return result;
}

console.log(calc(4, 7, 'multi'));