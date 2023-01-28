
function сalc(operation,a,b) {
    switch (operation) {
        case "add":
            return a + b;
            break;
        case "multi":
            return a * b;
            break;
        case "subtract":
            return a - b;
            break;
        default:
            return "unknown operation";
    }
}



console.log(сalc("add",5,5));
console.log(сalc("multi",5,5));
console.log(сalc("subtract",5,5));
console.log(сalc("act",5,5));

