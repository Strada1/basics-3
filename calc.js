let result;

function calc(operation, a, b) {
    switch (operation) {
        case '+':
            result = (a + b);
            break;

        case '-':
            result = (a - b);
            break;

        case '*':
            result = (a * b);
            break;

        case '/':
            result = (a / b);
            break;
        
        default:
            console.log('Что-то пошло не так')
    }
    console.log(result);
}

calc('-', 123, 456);

calc('+', 0, 1459);

calc('-', 123, 123);

calc('*', 1000, 0);

calc('-', 0, 123);