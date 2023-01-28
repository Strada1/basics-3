const FIRST_OPERAND = 'sdgsdgsdg'
const SECOND_OPERAND = 5
const OPERATOR = '*'
const RESULT = calc(FIRST_OPERAND, SECOND_OPERAND, OPERATOR)

console.log(RESULT)

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