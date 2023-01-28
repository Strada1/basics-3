let a = Number(prompt ('Введите первое число:',''));  //ввод данных пользователем калькулятор

let b = Number(prompt ('Введите второе число:',''));

let operation = prompt ('Введите операцию:', 'add, multi, subtract');


// calc = (operation, a, b) => {      //калькулятор для +, *, -
//   if (operation === 'add') {
//     return (a) + (b);
//   }
//   else if (operation === 'multi') {
//     return a * b;
//   }
//   else if (operation === 'subtract') {
//     return a - b;
//   }
//   else if (operation !== 'add' || 'multi' || 'subtract') {
//     alert ('Непонятный оператор!');
//   }
//   else {
//   };
// };


calc = (operation, a, b) => {         //калькулятор для +, *, - на switch'e
   switch (operation) {

    case ('add'):
    return (a) + (b);

    case ('multi'):
    return a * b;

    case ('subtract'):
    return a - b;
    
    default:
    alert ('Непонятный оператор!');
    break;
   };
};

alert (calc (operation, a, b));