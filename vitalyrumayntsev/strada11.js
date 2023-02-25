//#11 Функции

//Промежуточная задача

/*function checkAge(age) {
  if (age<18) {return confirm ('you are not allowed');}
  else { return confirm('you are welcome');}
}

checkAge(15)*/

//Калькулятор

function calc(operation, a, b) {
  if (operation === 'add') {
    a = +a
    b = +b
   return a + b;
  }
  else if (operation === 'multi') {
    return a * b;
  }
  else if (operation === 'subtract') {
    console.log (a - b);
  }
  else {
    console.log ('введите значение')
  }
}

console.log(calc('add', 1, 2)) //3
console.log(calc('multi', 1, 2)) //2
console.log(calc('subtract', 3, 2)) //1

//Калькулятор на Switch

function calc(operation, a, b) {
  switch(operation) {
    case 'add':
      console.log(a+b);
      break;
    case 'multi':
      console.log(a*b);
      break;
    case 'subtract':
      console.log(a-b);
      break;
    default:
      console.log('нет таких значений')
  }
}

calc('subtract', 1, 5); //-4
calc('add', 1, 5); //6
calc('multi', 1, 3); //3


