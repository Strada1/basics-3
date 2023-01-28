// ! Задание с 11-го дня
function checkAge(age) {
  if (age < 18) {
    console.log('you are not allowed');
  } else {
    console.log('you are allowed');
  }
}

// Тестирование функции age()
checkAge(10);
checkAge(20);

// Задание с 11-го дня с несколькими параметрами
function сalc(operation, a, b) {
  if (operation === 'add') {
    return a + b;
  } else if (operation === 'multi') {
    return a * b;
  } else if (operation === 'subtract') {
    return a - b;
  }
}

// Тестирование функции calc()
console.log(сalc('add', 1, 2));
console.log(сalc('multi', 1, 2));
console.log(сalc('subtract', 3, 2));