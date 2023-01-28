function calc(operation, a, b) {
    const isNumber = typeof(a) === 'number' && typeof(b) === 'number';
     if (!isNumber) { return 'no number' }
        else {
            switch (operation) {
            case 'add': return a + b;
            case 'multi': return a * b;
            case 'subtract': return a - b;
            default: return 'unknown operation';
            }
        }
}
    
console.log(calc('add', '1', 2));
console.log(calc('multi', 1, 2));
console.log(calc('subtract', 3, 2));
console.log(calc('add', 1, 'z'));
console.log(calc('sim', 1, 2));