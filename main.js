function calc(a , b, operation) {
    switch (operation) {
      case "add":
        return Number(a) + Number(b); // для сложения приводим тип нанных к number - по идее должен быть способ правильнее
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
  
  let resultAdd = calc("1", 2, "add");
  let resultMulti = calc(1, "2", "multi");
  let resultSubtract = calc(3, 2, "subtract");
  
  let resultMissOperation = calc(1, 2, ""); // Если не ввели operation
  
  console.log(resultAdd); // a + b
  console.log(resultMulti); // a * b
  console.log(resultSubtract); // a - b
  
  console.log(resultMissOperation); // покажет default
  
  console.log("Общая сумма чисел равна " + sum());