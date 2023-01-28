function calc(operation, a, b) {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    let result;
    switch (operation) {
      case "add":
        result = a + b;
        break;
      case "multi":
        result = a * b;
        break;
      case "subtract":
        result = a - b;
        break;
      default:
        result = "Принимаются только команды: 'add', 'multi', 'subtract'";
    }
  } else {
    result = "Нужно ввести чила! а не что-то там!";
  }
  
  return result;
}

console.log(calc("add", 2, 3));
console.log(calc("multi", 2, 4));
console.log(calc("subtract", 2, 5));
