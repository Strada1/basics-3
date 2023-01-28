function calc(a, b, operation) {
  if (operation == "add") {
    console.log(a + b);
    return;
  }
  else if (operation == "multi") {
    console.log(a * b);
    return;
  }
  else if (operation == "subtract") {
    console.log(a - b);
    return;
  }
}
calc(1, 2, "add");
calc(1, 2, "multi");
calc(3, 2, "subtract");