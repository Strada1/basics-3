function calc (operation, a, b) {
  let result;
  if (isNaN (a) || isNaN (b)) {
    console.log('Введите число!');
} else {  
switch(operation) {
  case 'add':
   result = (a + b);
    break;
  case 'multi':
   result = (a * b); 
    break;
  case 'subtract':
   result = (a - b);
    break;
  default:
   result = ('Вы ввели не то значение');
};
};
   console.log(result);
}

calc('multi', 2, 6);


