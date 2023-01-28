function calc(operation, a, b) {
    switch(operation) {
    case 'add': 
      return a + b;
    case 'multi': 
      return a * b;
    case 'subtract': 
      return a - b;
    case 'subtrakt':
      alert('Попробуй еще!'); 
    default:
      alert('Посчитаем?');
    }
  }
  
  const addResult = calc('add', 1, 2);
  console.log(addResult);
  
  const multiResult = calc('multi', 1, 2);
  console.log(multiResult);
  
  const subtractResult = calc('subtract', 3, 2);
  console.log(subtractResult);
  
  const subtraktResult = calc('subtrakt', 3, 2);
  console.log(subtraktResult);