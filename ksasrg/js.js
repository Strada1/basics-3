/* Попробуйте сами:
Создайте простую функцию калькулятор с именем сalc()
С тремя параметрами a и b, а также operation
Вызов сalc(‘add’, 1, 2) - возвращает 3
Вызов сalc(‘multi’, 1, 2) - возвращает 2
Вызов сalc(’subtract’, 3, 2) - возвращает 1
Делить пока ничего не надо. */

function calc(op, a, b) {
  switch(op) {
    case 'add': return a + b;
    case 'multi': return a * b;
    case 'subtract': return a - b;
    default: return 'Incorrect operation';
  }
}

console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('subtract', 3, 2));
console.log(calc('div', 1, 2));