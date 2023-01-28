function calc(operation, a, b) {
    switch (operation) {
        case 'сложить':
            return a + b;

        case 'умножить':
            return a * b;

        case 'вычесть':
            return a - b;

        default:
            return "Нет такого вычисления";

    }
}

console.log(calc('сложить', 1, 2));
console.log(calc('умножить', 1, 2));
console.log(calc('вычесть', 3, 2));
console.log(calc('ТЫГЫДЫК', 9, 2));