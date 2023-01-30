function calc(){
  const operation = prompt('add,multi,subtract');
  const firstNumber = +prompt('Первая цифра');
  const secondNumber = +prompt('Вторая цифра');
  let result;
  
  switch(operation) {
  case 'add':
     result = firstNumber + secondNumber; 
    break;
  case 'multi':
      result = firstNumber * secondNumber;
    break;
  case 'subtract':
      result = firstNumber - secondNumber;
        break;
}
switch(result) {
  case null:
    case '':
    case undefined:
    return alert('Ошибка');

}
alert(String(result)); 

}
 
calc();
