function calc(operation, a, b) {
  let add = (a + b);
  let multi = (a * b);
  let subtract = (a - b);

  switch (operation) {
    case 'add':
      console.log(a + b);
      break;
    case 'multi':
      console.log(a * b);
      break;
    case 'subtract':
      console.log(a - b);
      break;
  }
}

calc('subtract', 3, 2);
