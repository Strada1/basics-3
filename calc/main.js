'use strict';


function calc(operation, a, b) {
    if(isNaN(a) || isNaN(b)) {
       return'It`s not a number'; 
    } else {
        switch(operation) {
        case 'add':
            return a + b;
        case 'multi':
           return a * b;
        case 'subtract':
           return a - b; 
           default:
            return 'Error';
    }   
}
}

console.log(calc('add', 1, 3));
console.log(calc('multi', 2, 3));
console.log(calc('subtract', 5, 3));
console.log(calc('subtact', 5, 3));
console.log(calc('subtract', 'null', 3));


/*function calc2(operation, a, b) {
    let result;
    switch(operation) {
        case 'add':
            result = a + b; 
            break;
        case 'multi':
            result = a * b;
            break;
        case 'subtract':
            result = a - b;
            break;
    }
    console.log (result);
}

calc2('add', 5, 6);
calc2('multi', 5, 6);
calc2('subtract', 5, 6);*/

