function Calculate(a, b, oper) {
    
    switch (oper) {
        case 'plus':
            return ( Number(a) + Number(b) );
        case 'minus':
            return ( Number(a) - Number(b) );
        case 'multiply':
            return ( Number(a) * Number(b) );
        case 'divide':
            return ( Number(a) / Number(b) );
    }
}

export default Calculate;
