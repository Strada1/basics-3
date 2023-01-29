// if else way

function calc(operation, a, b) {
  if (operation === 'add'){
    return (a + b);
  } else if (operation === 'multi') {
    return (a * b);
  } else if (operation === 'subtract') {
    return (a - b);
  } 
}


const resultAdd = calc('add', 1, 2);
console.log(resultAdd);

const resultMulti = calc('multi', 1, 2);
console.log(resultMulti);

const resultSubtract = calc('subtract', 3, 2);
console.log(resultSubtract);

// switch way


function calc(operation, a, b) {
  
  switch(operation) {
    case 'add': 
    console.log(a + b);
    break;
      
    case 'multi': 
    console.log(a * b);
    break;
      
    case 'subtract':
    console.log(a - b);
    break;
      
    default:
    console.log( "Нет таких значений" );
  }
}


calc('add', 1, 2);

calc('multi', 1, 2);

calc('subtract', 3, 2);

calc('', 100, 100);