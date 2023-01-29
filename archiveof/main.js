function calc(operation, a, b) {
    let res;
    switch(operation) {
        case 'add':
            res = a + b;
            break;
        case 'multi':
            res = a * b;
            break;
        case 'substract':
            res = a - b;
            break;
    }
    return res;
}

console.log(calc('add', 1, 2))

