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

