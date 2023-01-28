/*Попробуйте сами:
    Создайте простую функцию калькулятор с именем сalc()
С тремя параметрами a и b, а также operation
Вызов сalc(‘add’, 1, 2) - возвращает 3
Вызов сalc(‘multi’, 1, 2) - возвращает 2
Вызов сalc(’subtract’, 3, 2) - возвращает 1
Делить пока ничего не надо.*/

const calc = (a, b, operation) => {
  let result = 0;
  if (typeof a !== 'number' || typeof b !== 'number') {
      return alert('вы ввели не числа')
  }
  switch (operation) {
      case ('add'):
          result = Number(a) + Number(b);
          break;
      case('multi'):
          result = a * b;
          break;
      case ('subtract'):
          result = a - b;
          break;
      case('div'):
          result = (b === 0)? alert('делить на ноль нельзя'): a/b;
          break;
      case('rest'):
          result = a%b;
          break;
      default:
          alert('операцию невозможно выполнить')
  }
  return result;
}
