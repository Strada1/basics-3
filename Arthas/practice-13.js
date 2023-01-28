function calc (operation, a, b) {
    switch(operation) {
        case 'add':
            return console.log(a + b)
        break
        case 'multi':
            return console.log(a * b)
        break
        case 'subtract':
            return console.log(a - b)
        break
        default:
            return console.log('Нет такой операции');
    }
}

calc('add',1, 2);
calc('multi',1, 2);
calc('subtract',3, 2);
calc('whatis',3, 2);