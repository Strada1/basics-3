function calc (a, operator, b) {
    switch (operator) {
        case 'add':
            alert (a + b);
            break;
        case 'multi':
            alert (a * b);
            break;
        case 'sub':
            alert (a - b);
            break;
    }  
}

calc (Number (prompt('Первое число')), prompt('Действие'), Number (prompt('Второе число')));