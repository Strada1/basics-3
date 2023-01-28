console.log(calc('sdgsdgsdg', 7, '*'))

function calc(a, b, oper) {
    a = Number(a)
    b = Number(b)
    let error = 'enter a valid value'

    if (isNaN(a) || isNaN(b)) {
        return error
    }

    switch (oper) {
        case '+': return a + b
        case '-': return a - b
        case '*': return a * b
        case '/': return a / b
        default: return error
    }
}