// #Strada
function calc (a, b, operation = 0) {
    // if (operation === "add") {
    //     return a + b;
    // } else if (operation === "multi") {
    //     return a * b;
    // } else if (operation === "subtract") {
    //     return a - b;
    // } else if ((operation === "divide") && (b !== 0)) {
    //     return a / b;
    // } else {
    //     return "Canceled"
    // }

    switch (operation) {
        case "add":
            return a + b;
        case "multi":
            return a * b;
        case "subtract":
            return a - b;
        case "divide":
            if (b !== 0) return a / b;
        default: 
            return "Canceled"
    }
}
calc(2, 2, "add");// 4
calc(2, 3, "multi");// 6
calc(5, 2, "subtract");// 3
calc(2, 5, "subtract");// -3
calc(50, 10, "divide");// 5
calc(10, 3, "divide");// 3.(3)
calc(10, 0, "divide");// "canceled"
calc(2, 2);// "canceled"

