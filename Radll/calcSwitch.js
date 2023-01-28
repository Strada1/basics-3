function calc(operation, a, b) {
    switch (operation) {
      case "add":
        return a + b;
      case "multi":
        return a * b;
      case "substruct":
        return a - b;
    }
  }
  console.log(calc("add", 2, 2));
  console.log(calc("multi", 2, 2));
  console.log(calc("substruct", 2, 2));