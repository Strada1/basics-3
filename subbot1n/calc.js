export function calc(operation, a, b) {
    switch (operation) {
        case 'add': return a + b;
        case 'multi': return a * b;
        case 'subtract': return a - b;
        case 'division': if (b !== 0) {
            return a / b ;
            } else return 'cannot be divided by 0';
        default: return 'unknown operation';
}
};