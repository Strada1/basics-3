console.log(calc(5, 7, '*'))

function calc(a, b, oper) {
    a = Number(a)
    b = Number(b)

    switch (oper) {
        case '+': return a + b
        case '-': return a - b
        case '*': return a * b
        case '/': return a / b
        default: return null
    }
}




