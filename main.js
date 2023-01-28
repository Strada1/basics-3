function calc(operation, a, b) {
    switch (operation) {
        case 'add':
            console.log (a + b);
            break;
        case 'multi':
            console.log (a * b);
            break;
        case 'subtract':
            console.log (a - b);
            break;
        default:
            console.log ('введите значение')
            break;
    } 
}
    
calc('add', 1, 2); // 3
calc('multi', 1, 2); // 2
calc('subtract', 3, 2); // 1
calc(' ', 3, 2); // введите значение
