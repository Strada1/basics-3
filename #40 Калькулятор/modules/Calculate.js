function Calculate(a, b, oper) {
    
    switch (oper) {
        case 'plus':
            return ( a + b );
        case 'minus':
            return ( a - b );
        case 'multiply':
            return ( a * b );
        case 'divide':
            return ( a / b );
    }
}

export default Calculate;
