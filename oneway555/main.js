function calc(operation, a, b) {
    switch(operation) {
        case 'add':
            console.log(a + b);
            break;
        case 'multi':
            console.log(a * b);
            break;
        case 'subtract':
            console.log(a - b);
            break;

    }
}

calc('subtract', 5, 5);
