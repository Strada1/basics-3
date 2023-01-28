let operation = prompt('add,multi,subtract');
let a = +prompt('Первая цифра');
let b = +prompt('Вторая цифра');
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

alert(result);

//версия только с switch