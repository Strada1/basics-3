'use strict';

function createCalc(operation, a, b) {
    switch (operation) {
        case 'add':
            console.log(a+b);
            break;
        case 'multi':
            console.log(a*b);
            break;
        case 'subtract':
            console.log(a-b);
            break;
        default:
            console.log('Operation not found');
    }
}


createCalc('add', 1, 2);