function calc(operation, a ,b) {
    
    const add = +a + +b;
    const multi = a * b;
    const subtract = (a - b);

    switch(operation) {
        case 'add':
            console.log(add);
            break;
        case 'multi':
            console.log(multi);
            break;
        case(subtract):
            console.log(subtract);
            break;
        default:
            console.log('oops.. there is no such operator')

    }
    
}

calc('multi', 1, 2);