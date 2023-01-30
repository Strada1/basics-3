function calc(operation, a, b ) {
    switch (operation) {
        case 'add':
            return a + b;
            break;
        case 'multi':
            return a * b;
            break;
        case 'substract':
            return a - b;
            break;
        default :
        console.log('ВВедите допустимую операцию: add, multi, substract')
    }
}
console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('substract', 3, 2));
console.log(calc('bump', 1, 2));
console.log(calc('add', 546, 454));
console.log(calc('multi', 2, 2));
console.log(calc('substract', 99, 9));
console.log(calc('страйк', 1, 2));
console.log(calc('add', 12, 25));