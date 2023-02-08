function calc(operation, a, b) {
    switch (operation) {
      case 'add':
        return a+b;
        break;
      case 'multi':
        return a*b;
        break;
      case 'subtract':
        return a-b;
        break;
      default:
        return 'Невозможно выполнить';
        break;
    }
}

let result = calc('add', 5, 2);
console.log(result);

let result2 = calc('multi', 7, 2);
console.log(result2);

let result3 = calc('subtract', 9, 2);
console.log(result3);

let result4 = calc('plus', 4, 5);
console.log(result4);
//