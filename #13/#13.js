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