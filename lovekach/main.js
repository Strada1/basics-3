function calc(operation, a, b) {
    if (operation === 'add') { 
        return a + b; 
    } else if (operation === 'multi') { 
        return a * b;
    } else    {
        return a - b ; 
    }
}

console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('subtract', 3, 2));





function switchCalc(operation, a, b,) {
    switch (operation) {
        case 'add':
            console.log(a + b);
            break;
        case 'multi':
            console.log(a * b);
            break;
        case 'substract':
            console.log(a - b);
            break;

    }
}

switchCalc('add', 1, 2);
switchCalc('multi', 1, 2);
switchCalc('substract', 3, 2);
