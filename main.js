function calc(a, b, operation) {
    switch (operation) {
      case "add":
        return a + b;
      case "multi":
        return a * b;
      case "subtract":
        return a - b;
      default:
        return "если ничего не подошло - то так";
    }
  };
  
  function sum() {
    return resultAdd + resultSubtract + resultMulti;
  };
  
  let resultAdd = calc(1, 2, "add");
  let resultMulti = calc(1, 2, "multi");
  let resultSubtract = calc(3, 2, "subtract");
  
  let resultMissOperation = calc(1, 2, ""); // Если не ввели operation
  
  console.log(resultAdd);
  console.log(resultMulti);
  console.log(resultSubtract);
  
  console.log(resultMissOperation); // покажет default
  
  console.log("Общая сумма чисел равна " + sum());