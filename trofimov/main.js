function calk(operation, a, b ) {

  switch (operation) {
    case 'add':
    return a + b

    case 'multi':
    return a * b

    case 'subtract':
    return a - b

    default:
    return 'такого знака еще нету'
  }

}

console.log(calk('add', 1, 2));
console.log(calk('multi', 1, 2));
console.log(calk('subtract', 3, 2));
console.log(calk('divide', 3, 2));







