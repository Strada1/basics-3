function calc(operation, a, b){
switch (operation){
    case "add":
    return a + b
    case "multi":
    return a * b
    case "subtract":
    return a - b
}
}
console.log(calc("multi", 8, 9))
console.log(calc("subtract",392333, 83838))
console.log(calc("add", 279, 21))