function calc(operation, a, b) {
    function add(a, b) {
        return a + b;
    }
    function multi(a, b) {
        return a * b;
    }
    function subtract(a, b) {
        return a - b;
    }

    if (!a || !b) { return 'Error'; }

    switch (operation) {
        case '+':
        case 'add':
            return add(a, b);
        case '*':
        case 'multi':
            return multi(a, b);
        case '-':
        case 'subtract':
            return subtract(a, b);
        default:
            return 'Error';
    }
}

let a = Number(prompt('Введите первое число'));
let b = Number(prompt('Введите второе число'));
operation = prompt('Введите операцию: add, multi, subtract');
alert(calc(operation, a, b));