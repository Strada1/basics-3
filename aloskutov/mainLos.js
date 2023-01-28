function calc(operator, a, b) {
    switch(operator) {
        case "add":
            return a+b;
            break;
        case "multi":
            return a*b;
            break;
        case "subtract":
            return a-b;
            break;
        default:
            console.log("Неверная команада");
            break;
    }
}

console.log(calc("add", 3, 2))
console.log(calc("multi", 3, 2))
console.log(calc("subtract", 3, 2))