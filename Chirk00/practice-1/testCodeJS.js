//1. Функция мини калькулятор
function calc(operation, a, b) {
  if (operation === 'add') {
    return a + b;
  } else if (operation === 'multi') {
    return a * b;
  } else if (operation === 'subtract') {
    return a - b;
  }
}
console.log(calc('add', 4, 5));

