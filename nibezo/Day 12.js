// ! Задание с 12-го дня, Switch
function сalc(operation, a, b) {
  switch (operation) {
    case 'add':
      return a + b;
    case 'multi':
      return a * b;
    case 'subtract':
      return a - b;
  }
}

// Тестирование функции calc() с применением Switch
console.log(сalc('add', 1, 2));
console.log(сalc('multi', 1, 2));
console.log(сalc('subtract', 3, 2));
