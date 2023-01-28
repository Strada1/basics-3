function calc(operation, a, b) {
    switch (operation) {
        case 'add':
            return a + b;;
        case 'multi':
            return a * b;
        case 'subtract':
            return a - b;
        default:
            return 'Введите operation'
    }
}
console.log(calc('add', 2, 2));
console.log(calc('multi', 3, 7));
console.log(calc('subtract', 9, 8));
console.log(calc('', 1, 1));