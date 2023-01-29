function calc(a, operation, b)  {
    if (operation == "add") {
        return a + b;
    } else if (operation == "multi") {
        return  a * b;
    } else if (operation == "subtract") {
        return a % b;
    } else {
        return "Wrong!";
    }
}
console.log (calc(3, 'add', 2));